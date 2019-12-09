// Слайдер 50на50 с кнопками
const rangePosition = document.querySelector(".slider__input");

function sliderRange() {
  const mainSlide = document.querySelector(".slider__second");

  (function sliderPosition() {
    mainSlide.style.width = rangePosition.value + "%";
  })();
}

function sliderBtn() {
  const beforeBtn = document.querySelector(".nav__btn-before");
  const afterBtn = document.querySelector(".nav__btn-after");

  beforeBtn.addEventListener("click", event => {
    event.preventDefault();
    rangePosition.value = 0;
  });
  afterBtn.addEventListener("click", event => {
    event.preventDefault();
    rangePosition.value = 100;
  });
}

export { sliderRange, sliderBtn };
