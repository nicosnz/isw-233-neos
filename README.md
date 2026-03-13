# Portfolio Web – SPA con Web Components

Este proyecto es un **portfolio personal desarrollado como Single Page Application (SPA)** utilizando **JavaScript Vanilla, Web Components y la History API** para manejar la navegación sin recargar la página.

El objetivo del proyecto es construir una arquitectura limpia y modular inspirada en aplicaciones modernas, manteniendo la simplicidad de **JavaScript sin frameworks**.

---

# 🚀 Cambios Recientes

Se realizaron mejoras importantes en la arquitectura del proyecto.

## 1. Implementación de un Router SPA

Se implementó un **router personalizado** que utiliza:

- `History API`
- `pushState`
- `popstate`

Esto permite navegar entre páginas sin recargar el navegador.

Archivos relacionados:

services/router.js
services/routes.js

Las rutas ahora están centralizadas en un **mapa de rutas**, lo que facilita agregar nuevas páginas sin modificar la lógica del router.

---

## 2. Implementación del patrón Singleton

Se añadió el **patrón de diseño Singleton** para manejar el acceso a los posts del blog.

Archivo:
services/DbPosts.js

Este servicio:

- Carga los datos desde `data/posts.json`
- Garantiza **una única instancia en toda la aplicación**
- Evita múltiples lecturas del archivo JSON
- Simula una pequeña base de datos en frontend

## 3. Arquitectura de carpetas

```
├── base.css
├── blocks
│   ├── blog
│   │   ├── blog.css
│   │   └── TarjetaBlog.js
│   ├── boton
│   │   └── boton.css
│   ├── contact
│   │   └── contact.css
│   ├── footer
│   │   ├── footer.css
│   │   └── Footer.js
│   ├── hero
│   │   ├── hero.css
│   │   └── Hero.js
│   ├── navbar
│   │   ├── navbar.css
│   │   └── Navbar.js
│   ├── projects
│   │   └── projects.css
│   └── sobre-mi
│       ├── sobremi.css
│       └── SobreMi.js
├── data
│   └── posts.json
├── img
│   ├── perfil2.jpeg
│   └── perfil.jpeg
├── index.html
├── index.js
├── pages
│   ├── Blog.js
│   ├── Contacto.js
│   ├── Home.js
│   └── Proyectos.js
├── README.md
├── services
│   ├── DbPosts.js
│   ├── router.js
│   └── routes.js
├── styles.css
└── vendor
    └── normalize.css
```
## 4. 📄 Páginas

Las páginas del sitio se encuentran en:
pages/

Cada página es un Web Component independiente:

- `Home.js`

- `Blog.js`

- `Proyectos.js`

- `Contacto.js`

## 5. Componentes reutilizables
Los componentes reutilizables están en:
blocks/
Ejemplos:

- `Navbar`

- `Hero`

- `Footer`

- `TarjetaBlog`

### 6. Link Ayuda
[Visitar](https://www.google.com)