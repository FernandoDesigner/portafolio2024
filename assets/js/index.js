const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las pestañas y el contenido correspondiente
    var tabButtons = document.querySelectorAll(".tab-btn");
    var tabContents = document.querySelectorAll(".tabcontent");

    // Asignar un evento clic a cada pestaña
    tabButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Ocultar todos los contenidos de las pestañas y remover la clase "active" de todos los botones
            tabContents.forEach(function(content) {
                content.style.display = "none";
            });
            tabButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            // Mostrar solo el contenido de la pestaña clicada y añadir la clase "active" al botón clicado
            var tabId = button.getAttribute("data-tab");
            var tabContent = document.getElementById(tabId);
            tabContent.style.display = "block";
            button.classList.add("active");
        });
    });
});

