
class Contacto extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        
        this.innerHTML = `
        

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
    `
    }
}

customElements.define("app-contacto", Contacto);