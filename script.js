let slideIndex = 1;

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // If we go past the last slide, wrap to first slide
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides by removing 'active' class
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Remove 'active' class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show current slide and highlight corresponding dot
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

setInterval(() => {
  changeSlide(1);
}, 5000);
