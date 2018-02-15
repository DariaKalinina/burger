"use strict";
var slider = document.querySelector('.burger__slider');
var block = document.querySelectorAll('.burger__content');

const left = document.querySelector('.arrow__link--left');
const right = document.querySelector('.arrow__link--right');
const list = document.querySelector('.burger__list');


  var width = document.body.clientWidth;
  var contentWidth = 0;
  var currentRight = 0;

  for (var i = 0; i < block.length; i++) {
    if (width>768) {
      var contentWidth = width*((940*100/1100)/100);
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
      slider.style.width = block[i].style.width;
    }
    if (width<=768 && width>480) {
      var contentWidth = width*((596*100/768)/100);
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
      slider.style.width = block[i].style.width;
    }
    if (width<=480) {
      var contentWidth = width*((460*100/480)/100);
      block[i].style.width = contentWidth+'px';
      var maxRight = contentWidth*4;
      var step = contentWidth;
      slider.style.width = block[i].style.width;
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



// window.addEventListener('resize', function (){
//   var width = document.body.clientWidth;
//   var contentWidth = 0;
//   var currentRight = 0;
//
//   for (var i = 0; i < block.length; i++) {
//     if (width>768) {
//       var contentWidth = width*((940*100/1100)/100);
//       block[i].style.width = contentWidth+'px';
//       var maxRight = contentWidth*4;
//       var step = contentWidth;
//       slider.style.width = block[i].style.width;
//     }
//     if (width<=768 && width>480) {
//       var contentWidth = width*((596*100/768)/100);
//       block[i].style.width = contentWidth+'px';
//       var maxRight = contentWidth*4;
//       var step = contentWidth;
//       slider.style.width = block[i].style.width;
//     }
//     if (width<=480) {
//       var contentWidth = width*((460*100/480)/100);
//       block[i].style.width = contentWidth+'px';
//       var maxRight = contentWidth*4;
//       var step = contentWidth;
//       slider.style.width = block[i].style.width;
//     }
//   }
//
//   right.addEventListener("click", function(event) {
//     event.preventDefault();
//     if (currentRight < maxRight) {
//       currentRight += step;
//       list.style.right = currentRight + "px";
//       console.log('right');
//     }
//   });
//
//   left.addEventListener("click", function(event) {
//     event.preventDefault();
//     if (currentRight >= step) {
//       currentRight -= step;
//       list.style.right = currentRight + "px";
//       console.log('left');
//     }
//   });
// });
