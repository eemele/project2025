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










document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      let category = this.getAttribute("data-category");
      let section = this.getAttribute("data-section");

      document.querySelectorAll(`.${section}-filter .filter-btn`).forEach(btn => {
        btn.classList.remove("active");
      });
      this.classList.add("active");

      let products = document.querySelectorAll(`.${section}-grid .product-card`);
      products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});





// testimony
document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.getElementById("reviews-slider");
  const reviews = Array.from(reviewsContainer.children);
  let index = 0;

  function showReviews() {
      reviewsContainer.innerHTML = ""; // Clear the container

      for (let i = 0; i < 3; i++) {
          let reviewIndex = (index + i) % reviews.length; // Loop through reviews
          reviewsContainer.appendChild(reviews[reviewIndex].cloneNode(true)); // Clone and append
      }

      index = (index + 1) % reviews.length; // Move to the next review set
  }

  showReviews(); // Initial load
  setInterval(showReviews, 5000); // Change reviews every 5 seconds
});







// for logos section

document.addEventListener("DOMContentLoaded", function () {
  const shopLogosContainer = document.querySelector(".shop-logos-container");
  const prevShopBtn = document.querySelector(".prev-shop-btn");
  const nextShopBtn = document.querySelector(".next-shop-btn");

  let scrollAmount = 0;
  const scrollStep = 200; // Adjust scroll step for better movement

  nextShopBtn.addEventListener("click", () => {
      shopLogosContainer.scrollLeft += scrollStep;
  });

  prevShopBtn.addEventListener("click", () => {
      shopLogosContainer.scrollLeft -= scrollStep;
  });
});










// u would like 

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".you-would-like-carousel");
  const prevBtn = document.querySelector(".you-would-like-prev-btn");
  const nextBtn = document.querySelector(".you-would-like-next-btn");

  let scrollAmount = 0;
  let cardWidth = document.querySelector(".you-would-like-product-card").offsetWidth + 15; 

  nextBtn.addEventListener("click", () => {
      if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount += cardWidth * 2; // Move by 2 cards
          carousel.style.transform = `translateX(-${scrollAmount}px)`;
      }
  });

  prevBtn.addEventListener("click", () => {
      if (scrollAmount > 0) {
          scrollAmount -= cardWidth * 2;
          carousel.style.transform = `translateX(-${scrollAmount}px)`;
      }
  });
});

