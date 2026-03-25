document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        entry.target.classList.remove("sleep");
      } else {
        entry.target.classList.add("sleep");
        entry.target.classList.remove("active");
      }
    });
  }, {
    threshold: 0.1
  });

  const elements = document.querySelector("app-home").children;
  Array.from(elements).forEach(el => {
    el.classList.add("sleep");
    observer.observe(el);
  });
});
