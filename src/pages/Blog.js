import DbPosts from "../services/DbPosts.js";

class Blog extends HTMLElement {

    constructor(){
        super();
        this.blogs;
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
        const container = document.querySelector(".blogs");

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
    async obtenerPosts() {
        const db =  await DbPosts.getInstance();
        return db.getPosts()
    }
    renderFavoriteBlogs(){
        let container = document.querySelector(".blogs");
        const buttonFavorite = document.getElementById("btn-favoritos");
        buttonFavorite.addEventListener("click",()=>{

            const blogsFavoritosElements = Array.from(document.querySelectorAll("app-tarjeta-blog")).filter(el => {
                const svg = el.querySelector('button svg');
                return svg.getAttribute('fill') == 'red';
            });
            container.innerHTML = "";


            blogsFavoritosElements.forEach(el => {
                container.appendChild(el.cloneNode(true)); 
            });                        
            
            
            
        })
    }
    renderAllBlogs(){
        let container = document.querySelector(".blogs");
        const buttonFavorite = document.getElementById("btn-todos");
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
export default Blog;