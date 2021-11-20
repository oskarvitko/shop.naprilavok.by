<?php

/* https://api.telegram.org/bot1949041891:AAFbo0s6FibP-1UQqh4WZT-cT-eat31Dtbs/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$token          = "1949041891:AAFbo0s6FibP-1UQqh4WZT-cT-eat31Dtbs";
$chat_id        = "-547856900";

$utm_source     = $_POST['utm_source'];
$utm_medium     = $_POST['utm_medium'];
$utm_campaign   = $_POST['utm_campaign'];
$utm_content    = $_POST['utm_content'];
$utm_term       = $_POST['utm_term'];

$name_form      = $_POST['name_form'];
$product        = $_POST['product'];
$arc_type       = $_POST['arc_type'];
$polycarbonate  = $_POST['polycarbonate'];
$length         = $_POST['length'];
$arc_step       = $_POST['arc_step'];

$name           = $_POST['user_name'];
$phone          = $_POST['user_phone'];

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Название теплицы:' => $product,
  'Тип дуги:' => $arc_type,
  'Длина теплицы:' => $length,
  'Шаг между дугами:' => $arc_step,
  'Толщина поликарбоната:' => $polycarbonate,
  'Название контактной формы:' => $name_form,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>