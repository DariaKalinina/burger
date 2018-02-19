const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;


const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

//делает точки для вертикального меню
var generateDot = function () {
  for (var i = 0; i < $(".section").length; i++) {
    var dot = $('<li>', {
      attr: {
        class: "nav-point__item",
        'data-scroll-number': i
      },
      html: '<a href="#" class="nav-point__link"></a>'
    });
    $(".nav-point__list").append(dot);
  }
};
generateDot();

$(".nav-point__item").eq(0).addClass("nav-point__item--active");
// добавить градицу у вертикального меню с точками
const dotItem = navPointItemEq => {
    $(".nav-point__item").eq(navPointItemEq).addClass("nav-point__item--active")
    .siblings().removeClass("nav-point__item--active");
  }

// функция для смещения секции
const transition = sectiomEq => {
  const position = `${sectiomEq * -100}%`;

  if (inScroll) return;

    inScroll = true;

    sections.eq(sectiomEq).addClass("active")
    .siblings().removeClass("active");

    display.css({
      transform: `translate(0, ${position})`,
      "-webkit-transform": `translate(0, ${position})`
    });

    $(".nav-point__item").eq(0).removeClass("nav-point__item--active");
    dotItem(sectiomEq);

    setTimeout(() => {
      inScroll = false;
    }, 1300);
    // 1300 - 1 секунда анимация + 300 мс задержка для отмены инерции движения
  };


//выбор направления и смещение
const scrollToSection = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'up' && prevSection.length) {
    transition(prevSection.index());
  }
  if (direction === 'down' && nextSection.length) {
    transition(nextSection.index());
  }
}

//событие колесико мыши или тачпада
$(document).on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  if (deltaY>0) {
    scrollToSection('down');
  }
  if (deltaY<0) {
    scrollToSection('up');
  }
});

//событие кнопки
$(document).on('keydown', e => {
  const keyD = e.originalEvent.keyCode;
  console.log(keyD);
  if (keyD == 40) {
    scrollToSection('down');
  }
  if (keyD == 38) {
    scrollToSection('up');
  }
});


//переход по data атрибуту
$('[data-scroll-number]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-number'));

  transition(target);
})



if (isMobile) {

  
  // if ($('body').hasClass('mobile')) {
    console.log('мобилка');
    var viewportHeight = $('.section').outerHeight();
    $('.section').css({ height: viewportHeight });
    console.log(viewportHeight);
  // }

  $(document).swipe({
      swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
          //смена направления

          const scrollDirection = direction === 'down'?
          'up' :
          'down';

          scrollToSection(scrollDirection);
      }
  });
}
