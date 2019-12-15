
const slides = document.querySelectorAll(".list-review__item");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,15000);
   
function goToSlide(n) {
    slides[currentSlide].className = "list-review__item";
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = "list-review__item list-review__item-show";
   }

const next = document.querySelector(".nav__show-next");
const previous = document.querySelector(".nav__show-prev");

function nextSlide() {
    goToSlide(currentSlide+1);
   }
   
function previousSlide() {
    goToSlide(currentSlide-1);
   }

previous.addEventListener("click", () => {
    previousSlide();
})

