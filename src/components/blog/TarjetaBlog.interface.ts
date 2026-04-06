export interface TarjetaBlogResponse{
    id:string;
    titulo:string;
    imagen:string;
    contenido:string;
}

export interface ApiResponse{
    posts:TarjetaBlogResponse[];
}