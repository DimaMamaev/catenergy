var link = document.querySelector('.menu-btn');
var menu = document.querySelector('.page-header__usernav--active');
    
    link.addEventListener('click',function(event){
    event.preventDefault();
    menu.classList.toggle('page-header__usernav--active');
    link.classList.toggle('menu-btn--active');
    })