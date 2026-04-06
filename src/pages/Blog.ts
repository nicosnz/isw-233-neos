import type { TarjetaBlogResponse } from "../components/blog/TarjetaBlog.interface.js";
import DbPosts from "../services/DbPosts.js";

class Blog extends HTMLElement {

    private blogs!:TarjetaBlogResponse[];
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        

            <section class="blog">
                <div class="blog__container">
                    <div class="blog__head">
                    <h2 class="blog__titulo">Blog</h2>
                    <p class="blog__descripcion">
                        Construir también es pensar.<span class="accent"></span><br>
                        Aquí escribo sobre software, crecimiento y las lecciones detrás de cada proyecto.
                    </p>
                    <div class="blog__filtros">
                        <button id="btn-todos" class="blog__btn">Todos</button>
                        <button id="btn-favoritos" class="blog__btn">Favoritos ⭐</button>
                    </div>
                    </div>
                    <div class="blogs">

                    </div>
                </div>
            </section>

        
        `;
        const container = document.querySelector(".blogs") as HTMLDivElement;

        this.obtenerPosts().then(posts => {
            this.blogs = posts;
           

            this.blogs.forEach(post => {

                const tarjeta = document.createElement("app-tarjeta-blog");


                tarjeta.setAttribute("titulo", post.titulo);
                tarjeta.setAttribute("urlImagen", post.imagen);

                tarjeta.setAttribute("contenido", post.contenido);

                container.appendChild(tarjeta);

            });
        
        
        });
        
            
       

        
        
        this.renderFavoriteBlogs();
        this.renderAllBlogs();

    }
    async obtenerPosts():Promise<TarjetaBlogResponse[] >{
        const db =  await DbPosts.getInstance();
        return db.getPosts()
    }
    renderFavoriteBlogs(){
        let container = document.querySelector(".blogs") as HTMLDivElement;
        const buttonFavorite = document.getElementById("btn-favoritos") as HTMLButtonElement;
        buttonFavorite.addEventListener("click",()=>{

            const blogsFavoritosElements = Array.from(document.querySelectorAll("app-tarjeta-blog")).filter(el => {
                const svg = el.querySelector('button svg') as SVGAElement;
                return svg.getAttribute('fill') == 'red';
            });
            container.innerHTML = "";


            blogsFavoritosElements.forEach(el => {
                container.appendChild(el.cloneNode(true)); 
            });                        
            
            
            
        })
    }
    renderAllBlogs(){
        let container = document.querySelector(".blogs") as HTMLDivElement;
        const buttonFavorite = document.getElementById("btn-todos") as HTMLButtonElement;
        buttonFavorite.addEventListener("click",()=>{
            container.innerHTML = ''
            this.obtenerPosts().then(posts => {
            this.blogs = posts;
           

            this.blogs.forEach(post => {

                const tarjeta = document.createElement("app-tarjeta-blog");


                tarjeta.setAttribute("titulo", post.titulo);
                tarjeta.setAttribute("urlImagen", post.imagen);

                tarjeta.setAttribute("contenido", post.contenido);

                container.appendChild(tarjeta);

            });
        
        
        });                   
            
            
            
        })
    }
}

customElements.define("app-blog", Blog);