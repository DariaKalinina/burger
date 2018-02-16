<?php
  $name = $_POST['user-name'];
  $phone = $_POST['user-phone'];
  $street = $_POST['street'];
  $house = $_POST['house'];
  $block = $_POST['house-block'];
  $apart = $_POST['apart'];
  $fl = $_POST['fl'];
  $comment = $_POST['text'];
  $pay = $_POST['radio-pay'];
  $disturb = $_POST['check'];

  $disturb = isset($disturb) ? 'Нет' : 'Да';

  $mail_message = '
  <html>
  <head>
    <title>Заявка</title>
  </head>
  <body>
    <h2>Заказ</h2>
    <ul>
      <li>Имя: '.$name.'</li>
      <li>Телефон: '.$phone.'</li>
      <li>Улица '.$street.', дом '.$house.', корпус '.$block.', квартира '.$apart.',  этаж '.$fl.'</li>
      <li>Комментарий: '.$comment.'</li>
      <li>Оплата:'.$pay.'</li>
      <li>Перезванивать: '.$disturb.'</li>
    </ul>
  </body>
  </html>
  ';

$headers = "From: Администратор сайта <admin@loftschool.com\r\n>".
          "MINE-Version: 1.0" . "\r\n".
          "Content-type: text/html; charset=UTF-8" . "\r\n";
$mail = mail('lynxx91@mail.ru', 'Заказ', $mail_message, $headers);

$data=[];

if ($mail) {
  $data['status'] ="OK";
} else {
  $data['status'] ="NO";
}

echo json_encode($data);

?>
