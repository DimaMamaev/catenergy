var link = document.querySelector('.menu-btn');
var menu = document.querySelector('.page-header__usernav--active');
    
    link.addEventListener('click',function(event){
    event.preventDefault();
    menu.classList.toggle('page-header__usernav--active');
    link.classList.toggle('menu-btn--active');
    })

// Открытие/закрытие окна регистрации

var office = document.querySelector('.usernav__link-office');
var openRegistration = document.querySelector('.page-header__private-office');
var closeRegistration = document.querySelector('.btn__close')


office.addEventListener('click',function(event){
    event.preventDefault();
    openRegistration.classList.add('page-header__private-office--show');
    menu.classList.add('page-header__usernav--active'); 
    link.classList.remove('menu-btn--active');   
})

closeRegistration.addEventListener('click', function(event) {
    event.preventDefault();
    openRegistration.classList.remove('page-header__private-office--show');
})


// Валидация форм заполнения

var catNameInput = document.querySelector('.section__input');

catNameInput.addEventListener('invalid', function
(evt){
    if (catNameInput.validity.tooShort) {
        catNameInput.setCustomValidity ('Имя/кличка кота должна состоять минимум из трех символов');} 
    else if (catNameInput.validity.tooLong) {
        catNameInput.setCustomValidity ('Имя/кличка кота должна состоять максимум из пятнадцати символов');}
    else if (catNameInput.validity.valueMissing) {
        catNameInput.setCustomValidity ('Хотите оставить кота голодным? Заполниете поле!');}
}
)