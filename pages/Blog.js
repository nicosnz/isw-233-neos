import DbPosts from "../services/DbPosts.js";

class Blog extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        DbPosts.getInstance()
            .then(db => db.getPosts())
            .then(posts => {

            const container = document.querySelector(".blogs");

            posts.forEach(post => {

                const tarjeta = document.createElement("app-tarjeta-blog");


                tarjeta.setAttribute("titulo", post.titulo);
                tarjeta.setAttribute("urlImagen", post.imagen);

                tarjeta.setAttribute("contenido", post.contenido);

                container.appendChild(tarjeta);

            });

        });
        this.innerHTML = `
        

        <section class="blog" >
            <div class="blog__container">
            <div class="blog__head">
                <h2 class="blog__titulo">Blog</h2>
                <p class="blog__descripcion">Construir también es pensar.<span class="accent"></span><br>Aquí escribo sobre software, crecimiento y las lecciones detrás de cada proyecto.</p>
            </div>
            <div class="blogs">

            </div>
            </div>
        </section>

        
    `
    }
}

customElements.define("app-blog", Blog);