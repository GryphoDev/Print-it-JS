const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// Retrieve all necessary DOM elements for the slideshow
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const banner = document.getElementById("banner");
const bannerImage = banner.querySelector("img");
const bannerTagline = banner.querySelector("p");
const bannerDots = banner.querySelector("div");
// Create spans that will represent the navigation dots
slides.forEach(() => {
  const bullet = document.createElement("span");
  bullet.classList.add("dot");
  bannerDots.appendChild(bullet);
});
// Retrieve the created dots from the DOM
const bullets = bannerDots.querySelectorAll("span");
// Initialize the counter and highlight the first dot when the page loads
let i = 0;
bullets[i].classList.add("dot_selected");
// Listen for clicks on the left arrow and update the counter
arrowLeft.addEventListener("click", () => {
  i--;
  // If i is -1, wrap around to the last slide
  if (i < 0) {
    i = slides.length - 1;
  }
  // Update the display with the new counter value
  updateSlide(i);
});
// Listen for clicks on the right arrow and update the counter
arrowRight.addEventListener("click", () => {
  i++;
  // If i equals the number of slides, wrap around to the first slide
  if (i >= slides.length) {
    i = 0;
  }
  // Update the display with the new counter value
  updateSlide(i);
});
// Function that updates the image and tagline display
function updateSlide(index) {
  bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerTagline.innerHTML = slides[index].tagLine;
  // Remove the 'dot_selected' class from all dots
  bullets.forEach((bullet) => {
    bullet.classList.remove("dot_selected");
  });
  // Add the 'dot_selected' class to the corresponding dot
  bullets[index].classList.add("dot_selected");
}
