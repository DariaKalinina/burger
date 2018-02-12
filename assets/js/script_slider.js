"use strict";
var slider = document.querySelector('.burger__slider');
var block = document.querySelectorAll('.burger__content');

const left = document.querySelector('.arrow__left');
const right = document.querySelector('.arrow__right');
const list = document.querySelector('.burger__list');


  var width = document.body.clientWidth;
  var contentWidth = 0;
  var currentRight = 0;

  for (var i = 0; i < block.length; i++) {
    if (width>768) {
      var contentWidth = width*85.45/100;
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
    }
    if (width<=768 && width>480) {
      var contentWidth = width*83.85/100;
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
    }
    if (width<=480) {
      var contentWidth = width*95.83/100;
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
    }
  }

  right.addEventListener("click", function(event) {
    event.preventDefault();
    if (currentRight < maxRight) {
      currentRight += step;
      list.style.right = currentRight + "px";
      console.log('right');
    }
  });

  left.addEventListener("click", function(event) {
    event.preventDefault();
    if (currentRight >= step) {
      currentRight -= step;
      list.style.right = currentRight + "px";
      console.log('left');
    }
  });



window.addEventListener('resize', function (){
  var width = document.body.clientWidth;
  var contentWidth = 0;
  var currentRight = 0;

  for (var i = 0; i < block.length; i++) {
    if (width>768) {
      var contentWidth = width*85.45/100;
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
    }
    if (width<=768 && width>480) {
      var contentWidth = width*83.85/100;
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
    }
    if (width<=480) {
      var contentWidth = width*95.83/100;
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
    }
  }

  right.addEventListener("click", function(event) {
    event.preventDefault();
    if (currentRight < maxRight) {
      currentRight += step;
      list.style.right = currentRight + "px";
      console.log('right');
    }
  });

  left.addEventListener("click", function(event) {
    event.preventDefault();
    if (currentRight >= step) {
      currentRight -= step;
      list.style.right = currentRight + "px";
      console.log('left');
    }
  });
});
