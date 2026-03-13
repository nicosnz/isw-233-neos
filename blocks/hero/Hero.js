class Hero extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <section class="hero">
            <div class="hero__contenedor">
            <div class="hero__contenido">
                <h1 class="hero__titulo">Emanuel Oly</h1>
                <p class="hero__objetivo">Mentalidad startup. Ejecución imparable.<span class="accent"></span></p>
                <p class="hero__descripcion">Proactivo, estratégico y orientado a resultados.<br>Transformo problemas complejos en soluciones simples y escalables.</p>
                <a href="/contacto" class="btn btn--green">Trabajemos Juntos &rsaquo;</a>
            </div>
            <div class="hero__imagen">
                <div class="hero__recortada">
                <img
                    src="img/perfil.jpeg"
                    alt="Emanuel Oly"
                />
                </div>
            </div>
            </div>
        </section>
        `;
    }
}

customElements.define("app-hero", Hero);