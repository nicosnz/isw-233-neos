export const Router = {

  init(){
    document.addEventListener("click", (e) => {

      const link = e.target.closest("a.navbar__link");
      if(!link) return;

      e.preventDefault();

      const href = link.getAttribute("href");
      Router.go(href);

    });

    window.addEventListener("popstate", (e) => {
      Router.go(e.state?.route || "/", false);
    });

    Router.go(location.pathname || "/", false);
  },

  go(route, addToHistory = true){

    if(addToHistory){
      history.pushState({route}, "", route);
    }

    const app = document.querySelector("#app");

    app.innerHTML = ""; 

    let page;

    switch(route){

        case "/":
            page = document.createElement("app-home");
            break;

        case "/sobre-mi":
            page = document.createElement("app-sobremi");
            break;

        case "/blog":
            page = document.createElement("app-blog");
            break;

        case "/proyectos":
            page = document.createElement("app-blog");
            break;
        
        case "/contacto":
            page = document.createElement("app-contacto");
            break;

        default:
            page = document.createElement("h1");
            page.textContent = "404";
    }

    app.appendChild(page);

    window.scrollTo(0,0);
  }

}