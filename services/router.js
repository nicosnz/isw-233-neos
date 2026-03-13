
import routes from "./routes.js";

export const Router = {

  init(){
    document.addEventListener("click", (e) => {

      const link = e.target.closest("a");
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

    const component = routes[route];

    let page;

    if(component){
      page = document.createElement(component);
    }
    else{
      page = document.createElement("h1");
      page.textContent = "404";
    }
    app.appendChild(page);

    window.scrollTo(0,0);
  }

}