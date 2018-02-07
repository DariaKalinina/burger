"use script";
var batton = document.querySelector('.header__burger-menu');
var block = document.querySelector('.header__burger-blocs');
var menu = document.querySelector('.nav-vertical');
var logo = document.querySelector('.logo');
var cross = document.querySelector('.header__x');

batton.addEventListener('click', function (event) {
  event.preventDefault();
  menu.style.display = 'block';
  logo.style.zIndex = '15';
  cross.style.display = 'inline-block';
});

cross.addEventListener('click', function (event) {
  event.preventDefault();
  menu.style.display = 'none';
  cross.style.display = 'none';
});
