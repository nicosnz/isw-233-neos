import "./index.css";



import { router } from "./services/router";
import "./components/navbar/Navbar";
import "./components/hero/Hero";
import "./components/sobre-mi/SobreMi";
import "./components/footer/Footer";
import "./components/blog/TarjetaBlog";

import "./pages/Home.js";
import "./pages/Blog.js";
import "./pages/Proyectos.js";
import "./pages/Contacto.js";
import "./services/IntersectionObserver.js";

router.init()
