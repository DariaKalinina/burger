"use strict";
var menuArray = document.querySelectorAll('.menu__item');


  menuArray[0].addEventListener('click', function (event) {
    event.preventDefault();
    console.log('click1');

    menuArray[0].classList.toggle('menu__item--active');
    menuArray[1].classList.remove('menu__item--active');
    menuArray[2].classList.remove('menu__item--active');
  });

  menuArray[1].addEventListener('click', function (event) {
    event.preventDefault();
    console.log('click2');

    menuArray[1].classList.toggle('menu__item--active');
    menuArray[0].classList.remove('menu__item--active');
    menuArray[2].classList.remove('menu__item--active');
  });

  menuArray[2].addEventListener('click', function (event) {
    event.preventDefault();
    console.log('click2');

    menuArray[2].classList.toggle('menu__item--active');
    menuArray[0].classList.remove('menu__item--active');
    menuArray[1].classList.remove('menu__item--active');
  });




    var width = document.body.clientWidth;

      if (width<=480) {
        console.log('phone');

        // // const menuPhone = menuPhoneItemEq => {
        //   $('.menu__item').eq(1).addClass('menu__item--active')
        //   .siblings().removeClass('menu__item--active');
        //
        // 
        //   $('.menu__item').eq(1).css({"z-index": "1"})
        //   .siblings().css({"z-index": "0"});
        //
        //   // if($('.menu__item').hasClass('menu__item--active')){
        //   //   $('.menu__desc').css({"width": "100%"});
        //   // };
        };
