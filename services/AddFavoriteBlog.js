class EstadoFavorito {
    constructor(contexto){
        this.contexto = contexto;
    }
    toggle(titulo) {}
}

class EstadoMarcado extends EstadoFavorito {
    toggle(titulo) {
        this.contexto.removeFavorito(titulo);
        this.contexto.setEstado(new EstadoNoMarcado(this.contexto));
        this.contexto.actualizarUI(false);
    }
}

class EstadoNoMarcado extends EstadoFavorito {
    toggle(titulo) {
        this.contexto.saveFavorito(titulo);
        this.contexto.setEstado(new EstadoMarcado(this.contexto));
        this.contexto.actualizarUI(true);
    }
}

export { EstadoFavorito, EstadoMarcado, EstadoNoMarcado };