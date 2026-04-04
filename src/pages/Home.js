import DbPosts from "../services/DbPosts.js";

class Home extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        
        this.innerHTML = `
        <app-hero></app-hero>

        <main class="proyectos" >
            <div class="proyectos__container">
            <div class="proyectos__inicio">
                <h2 class="proyectos__titulo">Proyectos Recientes</h2>
                <p class="proyectos__descripcion">Cada proyecto es una oportunidad para resolver un problema real.
                <br>Aquí encontrarás productos construidos con enfoque estratégico, ejecución sólida y mentalidad de crecimiento.</p>
            </div>

            <!-- Project 1: EnviosYA -->
            <div class="proyectos__proyecto">
                <div class="proyectos__proyecto-contenido">
                <div class="proyectos__proyecto-tecnologias">
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--java">Java</span>
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--spring">Spring Boot</span>
                </div>
                <h3 class="proyectos__proyecto-nomber">EnviosYA</h3>
                <p class="proyectos__proyecto-descripcion">La forma inteligente de gestionar y monitorear pedidos en tiempo real. EnvíosYa es una plataforma diseñada para dar visibilidad total al proceso de entregas. Centraliza pedidos, automatiza el seguimiento de estados y optimiza la operación logística desde un solo lugar. El resultado: menos errores, mayor control operativo y decisiones más rápidas basadas en datos reales.</p>
                <a href="#" class="btn btn--outline">Ver Más Información &rsaquo;</a>
                </div>
                <div class="proyectos__proyecto-imagen">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=560&h=370&fit=crop" alt="EnviosYA" />
                </div>
            </div>

            <!-- Project 2: Chat en Tiempo Real -->
            <div class="proyectos__proyecto">
                <div class="proyectos__proyecto-imagen">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=370&fit=crop" alt="Chat en Tiempo Real" />
                </div>
                <div class="proyectos__proyecto-contenido">
                <div class="proyectos__proyecto-tecnologias">
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--nest">Nest JS</span>
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--html">HTML</span>
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--css">CSS</span>
                </div>
                <h3 class="proyectos__proyecto-nombre">Chat en Tiempo Real</h3>
                <p class="proyectos__proyecto-descripcion">Comunicación instantánea, simple y escalable. Este sistema de chat fue diseñado para ofrecer mensajería en tiempo real con arquitectura sólida y preparada para crecer. Permite conexiones simultáneas, intercambio eficiente de mensajes y una experiencia fluida para los usuarios.</p>
                <a href="#" class="btn btn--green">Ver Más Información &rsaquo;</a>
                </div>
            </div>

            <!-- Project 3: E-Commerce MVP -->
            <div class="proyectos__proyecto">
                <div class="proyectos__proyecto-contenido">
                <div class="proyectos__proyecto-tecnologias">
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--net">.NET</span>
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--api">Api REST</span>
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--mongo">MongoDB</span>
                    <span class="proyectos__proyecto-tecnologia proyectos__proyecto-tecnologia--sql">SQL Server</span>
                </div>
                <h3 class="proyectos__proyecto-nombre">E-Commerce MVP</h3>
                <p class="proyectos__proyecto-descripcion">Un producto en evolución, diseñado para validar y escalar. Este e-commerce fue desarrollado como un MVP enfocado en probar modelo, experiencia de usuario y flujo de compra. Permite gestión de productos, carrito y proceso de pedido, sentando las bases para una plataforma escalable. Aunque aún no está al 100%, representa una etapa clave de experimentación, aprendizaje rápido e iteración continua el enfoque real detrás de cualquier producto digital que busca crecer.</p>
                <a href="#" class="btn btn--outline">Ver Más Información &rsaquo;</a>
                </div>
                <div class="proyectos__proyecto-imagen">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&h=370&fit=crop" alt="E-Commerce MVP" />
                </div>
            </div>
            </div>
        </main>

        <app-sobremi></app-sobremi>

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

        <section class="contacto" >
            <div class="contacto__container">
            <div class="contacto__head">
                <h2 class="contacto__titulo">Contacto</h2>
                <p class="contacto__descripcion">¿Tienes una idea o un proyecto en mente?<span class="accent"></span> Hablemos. Estoy abierto a colaborar, construir y llevar soluciones al siguiente nivel.</p>
            </div>
            <form class="formulario">
                <div class="formulario__group">
                <label class="formulario__label">Email</label>
                <input type="email" class="formulario__input" placeholder="Ingresa tu email" />
                </div>
                <div class="formulario__group">
                <label class="formulario__label">Teléfono</label>
                <input type="tel" class="formulario__input" placeholder="Ingresa tu teléfono" />
                </div>
                <div class="formulario__group">
                <label class="formulario__label">Mensaje</label>
                <textarea class="formulario__input formulario__textarea" placeholder="Ingresa la idea que tienes en mente..."></textarea>
                </div>
                <button type="submit" class="btn btn--green btn--full">Enviar &rsaquo;</button>
            </form>
            </div>
        </section>
    `;

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
    }
    
}

customElements.define("app-home", Home);