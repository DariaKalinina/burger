// $('#form').on('submit', e =>{
//   e.preventDefault();
//   console.log(e.target);
//   var targetForm = $(e.target),
//   data = targetForm.serialize(),
//   url = targetForm.attr("action"),
//   method = targetForm.attr("method");
//
//   var request = $.ajax({
//     type: method,
//     url: url,
//     dataType: 'JSON',
//     data: data
//   });
//
//   request.done(function( msg ) {
//     var status = msg.status;
//     if (status === "OK") {
//       alert('done');
//     }
//   });
//   request.fail(function( jqXHR, textStatus ) {
//     alert( "Request failed: " + textStatus );
//   });
//
//
// })



$('#form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    console.log('в функции submitForm');

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        // mes = msg.mes,
        console.log('в функции с msg');
        var status = msg.status;

        if (status === 'OK') {
          console.log('Done!!');
            $('.form__wrapper').css({"display": "flex"});
        } else{
          console.log('Error!!!');
            $('.form__modal--ok').css({"display": "none"});
            $('.form__modal--error').css({"display": "block"});
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
};

$('.form__x').on('click', e => {
  e.preventDefault();
  console.log('click form__x');
  $('.form__wrapper').css({"display": "none"});
});

// Универсальная функция для работы с формами
var ajaxForm = function (form) {

  console.log('в функции ajax');

    var data = form.serialize(),
        url = form.attr('action');

    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};
