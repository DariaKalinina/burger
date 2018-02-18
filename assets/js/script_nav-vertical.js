"use strict";
var batton = document.querySelector('.header__burger-menu');
var block = document.querySelector('.header__burger-blocs');
var menu = document.querySelector('.nav-vertical');
// var cross = document.querySelector('.header__x');

batton.addEventListener('click', function (event) {
  event.preventDefault();
  menu.style.display = 'block';
});


$('.header__x').on('click', e => {
  e.preventDefault();
  console.log('click cross');
  menu.style.display = 'none';
});

$('[data-scroll-number]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-number'));
  console.log(typeof target);
  transition(target);
  menu.style.display = 'none';

});
