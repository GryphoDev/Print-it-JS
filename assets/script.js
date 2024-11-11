import { slides } from "./dataCarousel.js";

// Retrieve all necessary DOM elements for the slideshow
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const banner = document.getElementById("banner");
const bannerImage = banner.querySelector("img");
const bannerTagline = banner.querySelector("p");
const bannerDots = banner.querySelector("div");
let i = 0; // Initialize the current slide index

// Initialize the slideshow
function InitSlide() {
  displayContent();
  const bullets = createDots();
  // Add event listeners for the arrow buttons
  arrowLeft.addEventListener("click", () => updateSlide(-1, bullets));
  arrowRight.addEventListener("click", () => updateSlide(+1, bullets));
}

// Create navigation dots for each slide
function createDots() {
  slides.forEach(() => {
    const bullet = document.createElement("span");
    bullet.classList.add("dot");
    bannerDots.appendChild(bullet);
  });
  const bullets = bannerDots.querySelectorAll("span");
  bullets[i].classList.add("dot_selected"); // Highlight the first dot
  return bullets;
}
function displayContent() {
  bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
  bannerTagline.innerHTML = slides[i].tagLine;
}
// Update the slide based on the direction and update the navigation dots
function updateSlide(direction, bullets) {
  // Calculate the new slide index
  i = (i + direction + slides.length) % slides.length;
  // Update the banner image and tagline
  displayContent();
  // Update the navigation dots
  bullets.forEach((bullet) => bullet.classList.remove("dot_selected"));
  bullets[i].classList.add("dot_selected");
}

// Start the slideshow
InitSlide();
