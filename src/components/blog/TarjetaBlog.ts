import { EstadoFavorito, EstadoMarcado, EstadoNoMarcado } from '../../services/EstadoTarjetaBlog';


export class TarjetaBlog extends HTMLElement {
    estado:EstadoFavorito;
    observerActivo:boolean;
    svgObserver:MutationObserver;
    constructor(){
        super();
        this.estado = new EstadoNoMarcado(this);
        this.observerActivo = false;
        this.svgObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "fill") {
                if (!this.observerActivo) {
                
                return;
                }
                const svg = this.querySelector('#iconoMeGusta') as SVGElement | null;
                if (!svg) return;

                const nuevoValor = svg.getAttribute("fill");
                if (nuevoValor === "red") {
                    this.mostrarToast("Blog agregado con éxito a favoritos");
                } else if (nuevoValor === "gray") {
                    this.mostrarToast("Blog removido con éxito de favoritos");
                }
            }
            });
        });
    }

    connectedCallback(){
        const titulo = this.getAttribute("titulo");
        const imagen = this.getAttribute("urlImagen");
        const contenido = this.getAttribute("contenido");
        this.innerHTML = `
        
            <div class="blogs__tarjeta">
                <div class="blogs__imagen">
                    <img src="${imagen}" alt="De idea a MVP" />
                </div>
                <div class="blogs__cuerpo">
                    <h3 class="blogs__titulo">${titulo}</h3>
                    <p class="blogs__descripcion">${contenido}</p>
                    <a href="/blog" class="btn btn--green btn--sm">Explorar Más &rsaquo;</a>
                    <button class="btn-favorito" aria-label="Agregar a favoritos">
                        <svg id="iconoMeGusta" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                                     2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                                     C13.09 3.81 14.76 3 16.5 3
                                     19.58 3 22 5.42 22 8.5
                                     c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                </div>
            </div>
                
        `
        const svg = this.querySelector('#iconoMeGusta') as SVGElement | null;
        if (!svg) return;
        

        this.svgObserver.observe(svg, { attributes: true});
        (this.querySelector(".btn-favorito") as HTMLButtonElement).addEventListener("click", () => {
            this.observerActivo = true;
            if(titulo){
                this.estado.toggle(titulo);
            }
        });
        if(titulo){

            this.inicializarEstado(titulo);
        }
    }
    disconnectedCallback() {
        if (this.svgObserver) {
            this.svgObserver.disconnect();
        }
    }
    mostrarToast(mensaje:string) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = mensaje;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add("toast--active"), 10);

        setTimeout(() => {
            toast.classList.remove("toast--active");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }


    setEstado(nuevoEstado:EstadoFavorito){
        this.estado = nuevoEstado;
    }

    actualizarUI(esFavorito:boolean){
        const svg = this.querySelector("svg") as SVGAElement | null;
        if(svg){

            svg.setAttribute("fill", esFavorito ? "red" : "gray");
        }
    }

    saveFavorito(titulo:string){
        let favoritos:string[] = JSON.parse(localStorage.getItem("favoritos") || "") || [];
        
        if(!favoritos.includes(titulo)){
            favoritos.push(titulo);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        }
    }

    removeFavorito(titulo:string){
        let favoritos:string[] = JSON.parse(localStorage.getItem("favoritos") || "") || [];
        favoritos = favoritos.filter(fav => fav !== titulo);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    inicializarEstado(titulo:string){
        let favoritos:string = JSON.parse(localStorage.getItem("favoritos") || "") || [];
        if(favoritos.includes(titulo)){
            this.setEstado(new EstadoMarcado(this));
            this.actualizarUI(true);
        } else {
            this.setEstado(new EstadoNoMarcado(this));
            this.actualizarUI(false);
        }
    }
      
}



customElements.define("app-tarjeta-blog", TarjetaBlog);