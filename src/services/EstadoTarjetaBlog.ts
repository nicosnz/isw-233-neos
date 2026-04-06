import type { TarjetaBlog } from "../components/blog/TarjetaBlog";


class EstadoFavorito {
    tarjetaBlog:TarjetaBlog;
    constructor(tarjetaBlog:TarjetaBlog){
        this.tarjetaBlog = tarjetaBlog;
    }
    toggle(titulo:string) {}
}

class EstadoMarcado extends EstadoFavorito {
    toggle(titulo:string) {
        this.tarjetaBlog.removeFavorito(titulo);
        this.tarjetaBlog.setEstado(new EstadoNoMarcado(this.tarjetaBlog));
        this.tarjetaBlog.actualizarUI(false);
    }
}

class EstadoNoMarcado extends EstadoFavorito {
    toggle(titulo:string) {
        this.tarjetaBlog.saveFavorito(titulo);
        this.tarjetaBlog.setEstado(new EstadoMarcado(this.tarjetaBlog));
        this.tarjetaBlog.actualizarUI(true);
    }
}

export { EstadoFavorito, EstadoMarcado, EstadoNoMarcado };