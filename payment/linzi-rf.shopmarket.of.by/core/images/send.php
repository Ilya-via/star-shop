<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['phone'])) {

//stick start
$orderData['phone'] = $_POST['phone'];
$orderData['name'] = $_POST['name'];

$orderData['products'][0] = [
    'offer_id' => 9870, //id товара
    'price' => 49, //Цена на лендинге
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
$title = "Увлажнитель"; #Заголовок письма

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