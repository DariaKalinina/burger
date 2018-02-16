$('#form').on('submit', e =>{
  e.preventDefault();
  console.log(e.target);
  var targetForm = $(e.target),
  data = targetForm.serialize(),
  url = targetForm.attr("action"),
  method = targetForm.attr("method");

  var request = $.ajax({
    type: method,
    url: url,
    dataType: 'JSON',
    data: data
  });

  request.done(function( msg ) {
    var status = msg.status;
    if (status === "OK") {
      //отправлено
    }
  });
  request.fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
  });


})
