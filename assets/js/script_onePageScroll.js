const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;


const transition = sectiomEq => {
  const position = `${sectiomEq * -100}%`;

  if (!inScroll) {
    inScroll = true;

    sections.eq(sectiomEq).addClass("active")
    .siblings().removeClass("active");

    display.css({
      transform: `translate(0, ${position})`
    });

    setTimeout(() => {
      inScroll = false;
    }, 1300);
    // 1300 - 1 секунда анимация + 300 мс задержка для отмены инерции движения

  }
}


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

  // для того, чтобы не дергался экран
  touchmove: e => e.preventDefault()

});


// плагин для анимации на телефоне
$(function() {
  $(document).swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      const phoneDirection = direction;
      // смена направления, тк плагин возвращает up и down
      if (phoneDirection == 'up') {
        scrollToSection('down');
      }
      if (phoneDirection == 'down') {
        scrollToSection('up');
      }
    }
  });
});
