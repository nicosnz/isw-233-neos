
import routes from "./routes.js";
type Route = keyof typeof routes;

export const router = {

  init():void{
    document.addEventListener("click", (e) => {

      const link = (e.target as HTMLElement).closest("a");
      if(!link) return;

      e.preventDefault();

      const href = link.getAttribute("href") as Route;
      router.go(href);

    });

    window.addEventListener("popstate", (e) => {
      router.go(e.state?.route || "/", false);
    });

    router.go(location.pathname as Route || "/", false);
  },

  go(route:Route, addToHistory = true):void{

    if(addToHistory){
      history.pushState({route}, "", route);
    }

    const app = document.querySelector("#app") as HTMLDivElement

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