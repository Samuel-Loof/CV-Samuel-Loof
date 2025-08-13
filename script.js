let slideIndex = 1;

// Function to change slides when arrow buttons are clicked
function changeSlide(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

// Main function that handles showing/hiding slides and updating dots
function showSlide(n) {
  let slides = document.getElementsByClassName("slide"); // Get all slide elements
  let dots = document.getElementsByClassName("dot"); // Get all dot elements

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
