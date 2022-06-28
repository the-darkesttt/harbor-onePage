let navCheck = document.querySelector('#nav-check');
let navList = document.querySelector('.nav__list');
let navBar = document.querySelectorAll('.nav-bar__span');
let body = document.querySelector('body');
let screenWidth = window.screen.width;

function navShow(){
    navList.style.left = 0;
    body.style.overflow = 'hidden';
}

function navHide(){
    navList.style.left = -navList.offsetWidth + 'px';
    body.style.overflow = 'auto';
}

if (screenWidth <= 768 && screenWidth > 425) {
    navCheck.onclick = function(){
        if (navCheck.checked) {
            navShow();
        } else {
            navHide();
        }
    }
} 
else if (screenWidth <= 425){
    navCheck.onclick = function(){
        if (navCheck.checked) {
            navShow();

            navBar.forEach(function(item){
                item.style.backgroundColor = '#FFFFFF';
            });
        } else {
            navHide();

            navBar.forEach(function(item){
                item.style.backgroundColor = '#28514F';
            });
        }
    }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin: 20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})