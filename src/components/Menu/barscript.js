document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.querySelector(".menu");
  
    if (!menuBar) return; // Evita errores si el elemento no existe
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        menuBar.classList.add("scrolled");
      } else {
        menuBar.classList.remove("scrolled");
      }
    });
  });