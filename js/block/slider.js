// Слайдер 50на50 с кнопками

export function sliderBtn() {
  let mainSlide = document.querySelector(".slider__second");
  let rangePosition = document.querySelector(".slider__input");

  function sliderPosition() {
    mainSlide.style.width = rangePosition.value + "%";
  }
  sliderPosition();

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
