// работа меню на мобильной версии сайта
(function burgerMenuMobile() {
  const menuBtn = document.querySelector(".page-header__btn");
  const menuStyle = document.querySelector(".menu-btn");
  const nav = document.querySelector(".page-header__usernav--active");

  menuBtn.addEventListener("click", event => {
    event.preventDefault();
    menuStyle.classList.toggle("menu-btn--active");
    nav.classList.toggle("page-header__usernav--active");
  });
})();
