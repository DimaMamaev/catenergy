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