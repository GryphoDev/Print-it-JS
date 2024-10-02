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

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const banner = document.getElementById("banner");
const bannerImage = banner.querySelector("img");
const bannerTagline = banner.querySelector("p");

let i = 0;

arrowLeft.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  slideImage(i);
});
arrowRight.addEventListener("click", () => {
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  slideImage(i);
});
// maj image
function slideImage(index) {
  bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerTagline.innerHTML = slides[index].tagLine;
}
