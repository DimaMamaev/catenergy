// Слайдер 50на50 с кнопками
const rangePosition = document.querySelector(".slider__input");
const mainSlide = document.querySelector(".slider__second");

export function sliderPosition() {
  mainSlide.style.width = rangePosition.value + "%";
}

export function sliderBtn() {
  const beforeBtn = document.querySelector(".nav__btn-before");
  const afterBtn = document.querySelector(".nav__btn-after");

  beforeBtn.addEventListener("click", event => {
    event.preventDefault();
    rangePosition.value = 0;
    sliderPosition();
  });
  afterBtn.addEventListener("click", event => {
    event.preventDefault();
    rangePosition.value = 100;
    sliderPosition();
  });
}
