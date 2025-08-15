document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  // Initialize slideshow
  showSlide(currentSlide);

  // Next/previous controls
  document
    .querySelector(".next")
    .addEventListener("click", () => changeSlide(1));
  document
    .querySelector(".prev")
    .addEventListener("click", () => changeSlide(-1));

  // Dot controls
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Auto-advance slides
  setInterval(() => changeSlide(1), 5000);

  function changeSlide(n) {
    showSlide(currentSlide + n);
  }

  function showSlide(n) {
    // Wrap around if at the end
    if (n >= slides.length) currentSlide = 0;
    else if (n < 0) currentSlide = slides.length - 1;
    else currentSlide = n;

    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Show current slide
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }
});
