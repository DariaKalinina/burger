var width = document.body.clientWidth;

$(".burger__composition-wrapper").on('click', e => {
  console.log('внутри composition1');
  e.preventDefault();

  if (width>768){
    $(".burger__composition-wrapper").toggleClass('burger__composition-wrapper--active');
    $(".burger__composition-block").toggleClass('burger__composition-block--active');
  }

  if (width<=768){
    $(".burger__composition-wrapper").addClass('burger__composition-wrapper--active');
    $(".burger__composition-block").addClass('burger__composition-block--active');
  }
});

$(".burger__x").on('click', e => {
  e.preventDefault();
  console.log('click burger__x');
  $(".burger__composition-wrapper").removeClass('burger__composition-wrapper--active');
  $(".burger__composition-block").removeClass('burger__composition-block--active');
});
