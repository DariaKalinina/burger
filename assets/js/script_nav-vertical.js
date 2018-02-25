"use strict";
var batton = document.querySelector('.header__burger-menu');
var block = document.querySelector('.header__burger-blocs');
var menu = document.querySelector('.nav-vertical');

const mobileDetectforNav = new MobileDetect(window.navigator.userAgent);
const isMobileNav = mobileDetect.mobile();

batton.addEventListener('click', function (event) {
  event.preventDefault();
  menu.style.display = 'block';
});


$('.header__x').on('click', e => {
  e.preventDefault();
  console.log('click cross');
  menu.style.display = 'none';
});


if (isMobileNav == null){
  $('[data-scroll-number]').on('click', e => {
    e.preventDefault();
    menu.style.display = 'none';
  });
} else if (isMobileNav){
  $('.nav-vertical__link').on('click', e => {
    menu.style.display = 'none';
  });
}
