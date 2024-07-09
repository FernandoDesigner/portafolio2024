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
    var tabButtons = document.querySelectorAll(".tab-btn");
    var tabContents = document.querySelectorAll(".tabcontent");

    tabButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            tabContents.forEach(function(content) {
                content.style.display = "none";
            });
            tabButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            var tabId = button.getAttribute("data-tab");
            var tabContent = document.getElementById(tabId);
            tabContent.style.display = "block";
            button.classList.add("active");
        });
    });
});

