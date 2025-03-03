document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.getElementById("navbar-toggler");
  const offcanvasMenu = document.getElementById("offcanvasMenu");
  const offcanvasClose = document.getElementById("offcanvasClose");

  // Open Offcanvas Menu
  toggler.addEventListener("click", function () {
    offcanvasMenu.classList.add("show");
  });

  // Close Offcanvas Menu
  offcanvasClose.addEventListener("click", function () {
    offcanvasMenu.classList.remove("show");
  });

  // Close Offcanvas when clicking outside, but not when clicking inside
  document.addEventListener("click", function (event) {
    if (!offcanvasMenu.contains(event.target) && !toggler.contains(event.target)) {
      offcanvasMenu.classList.remove("show");
    }
  });

  // Ensure clicking inside doesn't close menu
  offcanvasMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Close offcanvas when clicking any menu link (for better UX)
  document.querySelectorAll('.offcanvas-body a').forEach(link => {
    link.addEventListener('click', () => {
      offcanvasMenu.classList.remove('show');
    });
  });

  // Hero Slider Logic
  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;
  const slideInterval = 3000; // Change slide every 5 seconds

  // Ensure first slide is active on load
  slides[currentSlide].classList.add('active');

  setInterval(() => {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Increment currentSlide (or reset to 0)
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
  }, slideInterval);
});


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let scrollAmount = 0;
  let itemWidth = items[0].offsetWidth + 20; // Adjust for spacing

  // Clone all carousel items correctly and append them
  items.forEach(item => {
      let clone = item.cloneNode(true);
      carousel.appendChild(clone);
  });

  function scrollCarousel() {
      scrollAmount += 1; // Adjust for smoother speed
      carousel.style.transform = `translateX(-${scrollAmount}px)`;

      // Reset scroll when the first set of items is fully out of view
      if (scrollAmount >= itemWidth * totalItems) {
          scrollAmount = 0;
          carousel.style.transform = `translateX(0)`;
      }

      requestAnimationFrame(scrollCarousel);
  }

  scrollCarousel();
});

