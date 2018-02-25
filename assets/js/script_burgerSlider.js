"use strict";
var widthWindow = document.body.clientWidth;
var contentWidth = 0;
const slides = $(".burger__content");
const burgerList = $(".burger__list");
const slider = $(".burger__slider");


if (width>768) {
  var contentWidth = widthWindow*((940*100/1100)/100);
}
if (width<=768 && width>480) {
  var contentWidth = widthWindow*((596*100/768)/100);
}
if (width<=480) {
  var contentWidth = widthWindow*((460*100/480)/100);
}

slider.css({
  width: contentWidth
});

///для ресайза окна
window.addEventListener('resize', function (){
  var widthWindow = document.body.clientWidth;
    if (width>768) {
      var contentWidth = widthWindow*((940*100/1100)/100);
    }
    if (width<=768 && width>480) {
      var contentWidth = widthWindow*((596*100/768)/100);
    }
    if (width<=480) {
      var contentWidth = widthWindow*((460*100/480)/100);
    }
  slider.css({
  width: contentWidth
  });
});

//////////////////////////


// функция для смещения секции
const transitionSlider = slideEq => {
  const positionSlider = `${slideEq * -100}%`;
  console.log(positionSlider);
    console.log('transitionS');
    slides.eq(slideEq).addClass("activeSlide")
    .siblings().removeClass("activeSlide");

    burgerList.css({
      transform: `translate(${positionSlider}, 0)`,
      "-webkit-transform": `translate(${positionSlider}, 0)`
    });
  };


// выбор направления и смещение
const sliderScroll = directionSl => {
  const activeSl = slides.filter(".activeSlide");
  const nextSl = activeSl.next();
  const prevSl = activeSl.prev();
  if (directionSl == "left" && prevSl.length) {
    transitionSlider(prevSl.index());
  }
  if (directionSl == "right" && nextSl.length) {
    transitionSlider(nextSl.index());
  }
}

//событие
$('.arrow__link--right').on("click", e => {
    e.preventDefault();
    sliderScroll("right");
  });

$('.arrow__link--left').on("click", e => {
    e.preventDefault();
    sliderScroll("left");
  });
