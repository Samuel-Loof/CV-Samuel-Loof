document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let autoSlide;

  function showSlide(n) {
    if (n >= slides.length) currentSlide = 0;
    else if (n < 0) currentSlide = slides.length - 1;
    else currentSlide = n;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function changeSlide(n) {
    showSlide(currentSlide + n);
    resetAutoSlide(); // reset timer whenever user interacts with slide buttons
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => changeSlide(1), 5000);
  }

  // Controls
  document
    .querySelector(".next")
    .addEventListener("click", () => changeSlide(1));
  document
    .querySelector(".prev")
    .addEventListener("click", () => changeSlide(-1));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetAutoSlide();
    });
  });

  // Start auto-advance
  resetAutoSlide();
  showSlide(currentSlide);
});
