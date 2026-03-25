import "./index.css";



import { Router } from "./services/router.js";
import "./services/IntersectionObserver.js";
import "./components/navbar/Navbar.js";
import "./components/hero/Hero.js";
import "./components/sobre-mi/SobreMi.js";
import "./components/footer/Footer.js";
import "./components/blog/TarjetaBlog.js";

import "./pages/Home.js";
import "./pages/Blog.js";
import "./pages/Proyectos.js";
import "./pages/Contacto.js";


window.addEventListener("DOMContentLoaded",Router.init)
