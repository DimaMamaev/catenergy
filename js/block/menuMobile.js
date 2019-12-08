// Открытие/закрытие меню на мобильной версии

export function menuMobile() {
  let openMenuBtn = document.querySelector(".menu-btn");
  let menuActive = document.querySelector(".page-header__usernav--active");

  openMenuBtn.addEventListener("click", event => {
    event.preventDefault();
    openMenuBtn.classList.toggle("menu-btn--active");
    menuActive.classList.toggle("page-header__usernav--active");
  });
}
