import './vendor/normalize.css';


import './base.css';
import './components/boton/boton.css';
import './components/navbar/navbar.css';
import './components/hero/hero.css';
import './components/projects/projects.css';
import './components/blog/blog.css';
import './components/sobre-mi/sobremi.css';
import './components/contact/contact.css';
import './components/footer/footer.css';
import './components/toast/toast.css';



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



Router.init();