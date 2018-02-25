const mobileDetectPhone = new MobileDetect(window.navigator.userAgent);
const isMobilePhone = mobileDetect.mobile();

const sections = $(".section");
const display = $(".maincontent");


//делает точки для вертикального меню
// var generateDot = function () {
//   for (var i = 0; i < $(".section").length; i++) {
//     var dot = $('<li>', {
//       attr: {
//         class: "nav-point__item",
//         'data-scroll-number': i
//       },
//       html: '<a href="#" class="nav-point__link"></a>'
//     });
//     $(".nav-point__list").append(dot);
//   }
// };
// generateDot();

// $(".nav-point__item").eq(0).addClass("nav-point__item--active");
// // добавить градицу у вертикального меню с точками
// const dotItem = navPointItemEq => {
//     $(".nav-point__item").eq(navPointItemEq).addClass("nav-point__item--active")
//     .siblings().removeClass("nav-point__item--active");
//   }

// функция для смещения секции
// const transition = sectiomEq => {
//   const position = `${sectiomEq * -100}%`;
//
//   if (inScroll) return;
//
//     inScroll = true;
//
//     sections.eq(sectiomEq).addClass("active")
//     .siblings().removeClass("active");
//
//     display.css({
//       transform: `translate(0, ${position})`,
//       "-webkit-transform": `translate(0, ${position})`
//     });
//
//     $(".nav-point__item").eq(0).removeClass("nav-point__item--active");
//     dotItem(sectiomEq);
//
//     setTimeout(() => {
//       inScroll = false;
//     }, 1300);
//     // 1300 - 1 секунда анимация + 300 мс задержка для отмены инерции движения
// };

//переход по data атрибуту
// $('[data-scroll-number]').on('click', e => {
//   e.preventDefault();
//   const target = parseInt($(e.currentTarget).attr('data-scroll-number'));
//   transition(target);
// });


//выбор направления и смещение для телефона
function scrollPhonePx(direction,distance) {
  console.log("в функции scrollPhonePx");
  if (direction === 'up') {
    console.log("в функции scrollPhonePx up");
    display.css({
      transform: `translate(0, -distance)`,
      "-webkit-transform": `translate(0, -distance)`
    });
  }
  if (direction === 'down') {
    console.log("в функции scrollPhonePx down");
    display.css({
      transform: `translate(0, distance)`,
      "-webkit-transform": `translate(0, distance)`
    });
  }
}

if (isMobile) {
  //перерасчет высоты экрана
  var viewportHeight = $('.section').outerHeight();
  $('.section').css({ height: viewportHeight });

  $(document).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
   //смена направления
      const scrollDirection = direction === 'down'?
      'up' :
      'down';
      console.log(direction);
      console.log(distance);

      scrollPhonePx(scrollDirection,distance);

    }
  });
}
