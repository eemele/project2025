
    document.addEventListener("DOMContentLoaded", function () {
      const toggler = document.getElementById("navbar-toggler");
      const offcanvasMenu = document.getElementById("offcanvasMenu");
      const offcanvasClose = document.getElementById("offcanvasClose");

      toggler.addEventListener("click", function () {
        offcanvasMenu.classList.add("show");
      });

      offcanvasClose.addEventListener("click", function () {
        offcanvasMenu.classList.remove("show");
      });

      // Optional: Close offcanvas when clicking outside of it
      document.addEventListener("click", function (event) {
        if (
          !offcanvasMenu.contains(event.target) &&
          !toggler.contains(event.target)
        ) {
          offcanvasMenu.classList.remove("show");
        }
      });
    });
  




    
    
    document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelectorAll('.hero-slider .slide');
        let currentSlide = 0;
        const slideInterval = 5000; // Change slide every 5 seconds
      
        setInterval(() => {
          // Remove active class from current slide
          slides[currentSlide].classList.remove('active');
      
          // Increment currentSlide (or reset to 0)
          currentSlide = (currentSlide + 1) % slides.length;
      
          // Add active class to new slide
          slides[currentSlide].classList.add('active');
        }, slideInterval);
      });
      