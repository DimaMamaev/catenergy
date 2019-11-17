
// Открытие/закрытие меню на мобильной версии
var link = document.querySelector('.menu-btn');
var menu = document.querySelector('.page-header__usernav--active');
    
    link.addEventListener('click',function(event){
    event.preventDefault();
    menu.classList.toggle('page-header__usernav--active');
    link.classList.toggle('menu-btn--active');
    })

// Открытие/закрытие окна регистрации

var office = document.querySelector('.usernav__link-office');
var openRegistrationMobile = document.querySelector('.page-header__private-office');
var closeRegistration = document.querySelector('.btn__close');
var openRegistrationTablet = document.querySelector('.usernav__item--tablet');

office.addEventListener('click',function(event){
    event.preventDefault();
    openRegistrationMobile.classList.add('page-header__private-office--show');
    menu.classList.add('page-header__usernav--active'); 
    link.classList.remove('menu-btn--active');   
})

openRegistrationTablet.addEventListener('click', function(event){
    event.preventDefault();
    openRegistrationMobile.classList.toggle('page-header__private-office--show');
})

closeRegistration.addEventListener('click', function(event){
    event.preventDefault();
    openRegistrationMobile.classList.remove('page-header__private-office--show');
    document.addEventListener('keydown', function(event){
        if (event.keyCode === 27) {
        openRegistrationMobile.classList.remove('page-header__private-office--show');   
        }
    })
})

// Открытие/закрытие корзины
var basket = document.querySelector('.basket__wrapper');
var basketOpen = document.querySelector('.basket__purchases');
var basketClose = document.querySelector('.purchases__btn')



basket.addEventListener('click', function(event) {
    event.preventDefault();
    basketOpen.classList.toggle('basket__purchases--show');
})

basketClose.addEventListener('click', function(event) {
    event.preventDefault();
    basketOpen.classList.remove('basket__purchases--show');
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            basketOpen.classList.remove('basket__purchases--show');
        }
    })
})

// Перетаскивание открытого окна корзины

var basketHandler = document.querySelector('.purchases__wrapper');

basketHandler.onmousedown = function(event) {

    let shiftX = event.clientX - basketHandler.getBoundingClientRect().left;
    let shiftY = event.clientY - basketHandler.getBoundingClientRect().top;
    
    moveAt(event.pageX, event.pageY);
  
    function moveAt(pageX, pageY) {
        basketHandler.style.left = pageX - shiftX + 'px';
        basketHandler.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    basketHandler.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      basketHandler.onmouseup = null;
    };
  
  };
  
  basketHandler.ondragstart = function() {
    return false;
  };





// Валидация форм заполнения

var catNameInput = document.querySelector('.section__input-name');

catNameInput.addEventListener('invalid', function(event){
    if (catNameInput.validity.tooShort) {
        catNameInput.setCustomValidity ('Имя/кличка кота должна состоять минимум из трех символов');} 
    else if (catNameInput.validity.tooLong) {
        catNameInput.setCustomValidity ('Имя/кличка кота должна состоять максимум из пятнадцати символов');}
    else if (catNameInput.validity.valueMissing) {
        catNameInput.setCustomValidity ('Хотите оставить кота голодным? Заполните поле!');}
})

// 