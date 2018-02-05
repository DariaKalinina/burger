"use script";
var team = document.querySelector('.team__item');
var teamLink = document.querySelector('.team__link');

teamLink.addEventListener('click', function () {
  event.preventDefault();
  
  team.classList.add('team__item--active');
});
