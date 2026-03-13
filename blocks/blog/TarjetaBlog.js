class TarjetaBlog extends HTMLElement {

    constructor(){
        super();
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
                    <a href="#" class="btn btn--green btn--sm">Explorar Más &rsaquo;</a>
                </div>
                </div>
                
    `
    }
}

customElements.define("app-tarjeta-blog", TarjetaBlog);