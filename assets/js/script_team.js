"use script";
var teamArray = document.querySelectorAll('.team__item');

teamArray[0].classList.add('team__item--active');

teamArray[0].addEventListener('click', function () {
  event.preventDefault();
  console.log('click1');
  var click = 'click1';

  teamArray[0].classList.add('team__item--active');
  teamArray[1].classList.remove('team__item--active');
  teamArray[2].classList.remove('team__item--active');
  teamArray[3].classList.remove('team__item--active');
});

teamArray[1].addEventListener('click', function () {
  event.preventDefault();
  console.log('click2');

  teamArray[1].classList.add('team__item--active');
  teamArray[0].classList.remove('team__item--active');
  teamArray[2].classList.remove('team__item--active');
  teamArray[3].classList.remove('team__item--active');
});

teamArray[2].addEventListener('click', function () {
  event.preventDefault();
  console.log('click3');

  teamArray[2].classList.add('team__item--active');
  teamArray[0].classList.remove('team__item--active');
  teamArray[1].classList.remove('team__item--active');
  teamArray[3].classList.remove('team__item--active');
});

teamArray[3].addEventListener('click', function () {
  event.preventDefault();
  console.log('click4');

  teamArray[3].classList.add('team__item--active');
  teamArray[0].classList.remove('team__item--active');
  teamArray[1].classList.remove('team__item--active');
  teamArray[2].classList.remove('team__item--active');
});
