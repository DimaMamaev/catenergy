// Открытие/закрытие меню на мобильной версии

export function menuMobile() {
  const openMenuBtn = document.querySelector(".menu-btn");
  const menuActive = document.querySelector(".page-header__usernav--active");

  openMenuBtn.addEventListener("click", event => {
    event.preventDefault();
    openMenuBtn.classList.toggle("menu-btn--active");
    menuActive.classList.toggle("page-header__usernav--active");
  });
}
