"use script";
var menuArray = document.querySelectorAll('.menu__item');

  menuArray[0].addEventListener('click', function () {
    event.preventDefault();
    console.log('click1');

    menuArray[0].classList.toggle('menu__item--active');
    menuArray[1].classList.remove('menu__item--active');
    menuArray[2].classList.remove('menu__item--active');
  });

  menuArray[1].addEventListener('click', function () {
    event.preventDefault();
    console.log('click2');

    menuArray[1].classList.toggle('menu__item--active');
    menuArray[0].classList.remove('menu__item--active');
    menuArray[2].classList.remove('menu__item--active');
  });

  menuArray[2].addEventListener('click', function () {
    event.preventDefault();
    console.log('click2');

    menuArray[2].classList.toggle('menu__item--active');
    menuArray[0].classList.remove('menu__item--active');
    menuArray[1].classList.remove('menu__item--active');
  });

function showWidth() {
  var width = window.innerWidth;

  return width;
};

window.addEventListener("resize", showWidth);
