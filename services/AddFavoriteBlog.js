class EstadoFavorito {
    constructor(tarjetaBlog){
        this.tarjetaBlog = tarjetaBlog;
    }
    toggle(titulo) {}
}

class EstadoMarcado extends EstadoFavorito {
    toggle(titulo) {
        this.tarjetaBlog.removeFavorito(titulo);
        this.tarjetaBlog.setEstado(new EstadoNoMarcado(this.tarjetaBlog));
        this.tarjetaBlog.actualizarUI(false);
    }
}

class EstadoNoMarcado extends EstadoFavorito {
    toggle(titulo) {
        this.tarjetaBlog.saveFavorito(titulo);
        this.tarjetaBlog.setEstado(new EstadoMarcado(this.tarjetaBlog));
        this.tarjetaBlog.actualizarUI(true);
    }
}

export { EstadoFavorito, EstadoMarcado, EstadoNoMarcado };