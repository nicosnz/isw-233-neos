class SobreMi extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <section class="sobremi">
                <div class="sobremi__titulo">
                <h2>Sobre Mi</h2>
                </div>
                <div class="sobremi__contenedor">
                <p class="hero__descripcion">Soy desarrollador de software con enfoque en backend y desarrollo web. Trabajo principalmente con .NET y Java, diseñando soluciones robustas, escalables y bien estructuradas. Me siento cómodo trabajando con bases de datos relacionales como SQL Server y no relacionales como MongoDB, entendiendo cuándo usar cada una según el problema.

                
                Me considero una persona altamente productiva y orientada a resultados. No soy del tipo que deja tareas a medias: si empiezo algo, lo termino. No me gusta irme a dormir sabiendo que algo quedó sin resolver. Esa mentalidad me ha permitido crecer rápido, asumir responsabilidades y mantener estándares altos en cada proyecto.

                Disfruto construir sistemas bien pensados, optimizar procesos y encontrar soluciones eficientes a problemas complejos. Siempre busco mejorar tanto el código como a mí mismo.</p>
                <div class="sobremi__imagen">
                    <div class="sobremi__recortada">
                    <img
                        src="img/perfil2.jpeg"
                        alt="Emanuel Oly"
                    />
                    </div>
                </div>
                </div>
            </section>
        `;
    }
}

customElements.define("app-sobremi", SobreMi);