export function privateOfficePopup() {
  const privateOffice = document.querySelector(".usernav__link-office");
  const showPopup = document.querySelector(".page-header__private-office");
  const userNavigation = document.querySelector(".page-header__usernav");
  const userNavigationBtn = document.querySelector(".menu-btn");

  privateOffice.addEventListener("click", event => {
    event.preventDefault();
    showPopup.classList.add("page-header__private-office--show");
    userNavigation.classList.add("page-header__usernav--active");
    userNavigationBtn.classList.remove("menu-btn--active");
  });

  const showPopupTablet = document.querySelector(".usernav__item--tablet");

  showPopupTablet.addEventListener("click", event => {
    event.preventDefault();
    showPopup.classList.add("page-header__private-office--show");
  });

  const closePopup = document.querySelector(".btn__close");

  closePopup.addEventListener("click", event => {
    event.preventDefault();
    showPopup.classList.remove("page-header__private-office--show");
    document.addEventListener("keydown", event => {
      if (event.keyCode === 27) {
        showPopup.classList.remove("page-header__private-office--show");
      }
    });
  });
}
