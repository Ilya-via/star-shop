<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['phone'])) {

$orderData['phone'] = $_POST['phone'];
$orderData['name'] = $_POST['name'];

$color = $_POST['color'];
$uid;

$orderData['comment'] = "Тест. Цена в рф.";


if($color == '') {
    $uid = 12116;
    $orderData['comment'] = "Уточнить цвет линз у клиента";
}
elseif($color == '1') {
    $uid = 12011;
}
elseif($color == '2') {
    $uid = 12012;
}
elseif($color == '3') {
    $uid = 12009;
}
elseif($color == '4') {
    $uid = 12010;
}
elseif($color == '5') {
    $uid = 12007;
}
elseif($color == '6') {
    $uid = 12008;
}
elseif($color == '7') {
    $uid = 12005;
}
elseif($color == '8') {
    $uid = 12006;
}
elseif($color == '9') {
    $uid = 12004;
}
elseif($color == '10') {
    $uid = 12058;
}
elseif($color == '11') {
    $uid = 12002;
}

$orderData['products'][0] = [
    'offer_id' => $uid, 
    'price' => 29.99, 
    'quantity' => 1,
];

$message = [
    "api_token" => "iH1MeRuJTmN3rwSfWLgByuIEmAxIqqnV6M2q3Nih3DwFEGNQXitrRLffrWvg", //Настройки->Интеграции->Api Ключ
    'order' => $orderData,
];

$curl = curl_init();
$messageQuery = http_build_query($message);
$curlUrl = 'https://stickcrm.by/api/orders';
curl_setopt($curl, CURLOPT_URL, $curlUrl);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $messageQuery);
$resultJson = curl_exec($curl);
//stick end
	
$email = "vrassrochky.by@gmail.com"; #Email, на него придут письма
$title = "Цветные линзы"; #Заголовок письма

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
	header('Location: good.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>