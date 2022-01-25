const discoverBtn = document.querySelector("#discover-btn");
const navBar = document.querySelector(".header");
const biographySection = document.querySelector("#about-us-section");
const hero = document.querySelector(".hero");

const slides = document.querySelectorAll(".slide");
const slideBtnLeft = document.querySelector(".slider__button-left");
const slideBtnRight = document.querySelector(".slider__button-right");
const sliderDotsContainer = document.querySelector(".dots");
///////////
//// set slides initial position
let currentSlide = 0;
let maxSlides = slides.length;

const createDots = () => {
  slides.forEach((_, index) => {
    sliderDotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide= ${index}></button>`
    );
  });
};

createDots();

const activateDot = (slide) => {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });

  document
    .querySelector(`.dots__dot[data-slide ="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = (s) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - s)}%)`;
  });

  activateDot(s);
};

goToSlide(0);

//////////////
//// change slides positions when arrow button clicked
const nextSlide = () => {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

slideBtnRight.addEventListener("click", nextSlide);
slideBtnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  e.key == "ArrowRight" && nextSlide();
  e.key == "ArrowLeft" && prevSlide();
});

sliderDotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});
