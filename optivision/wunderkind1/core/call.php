<?php
//***************** Страница с завершением заказа ******************
session_start();

// формируем массив с товарами в заказе (если товар один - оставляйте только первый элемент массива)
$products_list = array(
    1 => array(
            'product_id' => '56', //код товара (из каталога CRM)
            'price'      => '21', //цена товара 1
            'count'      => '1',  //количество товара 1
    )
);
$products = urlencode(serialize($products_list));
$sender = urlencode(serialize($_SERVER));

// параметры запроса
$data = array(
    'key'             => '5a8aa34352a50b688b14c1f19edafa24', //Ваш секретный токен
    'order_id'        => number_format(round(microtime(true)*10),0,'.',''), //идентификатор (код) заказа (*автоматически*)
    'country'         => 'UA',                         // Географическое направление заказа
    'office'          => '3',                          // Офис (id в CRM)
    'products'        => $products,                    // массив с товарами в заказе
    'bayer_name'      => $_REQUEST['name'],            // покупатель (Ф.И.О)
    'phone'           => $_REQUEST['phone'],           // телефон
    'email'           => $_REQUEST['email'],           // электронка
    'comment'         => $_REQUEST['product_name'],    // комментарий
    'delivery'        => $_REQUEST['delivery'],        // способ доставки (id в CRM)
    'delivery_adress' => $_REQUEST['delivery_adress'], // адрес доставки
    'payment'         => '',                           // вариант оплаты (id в CRM)
    'sender'          => $sender,
    'utm_source'      => $_SESSION['utms']['utm_source'],  // utm_source
    'utm_medium'      => $_SESSION['utms']['utm_medium'],  // utm_medium
    'utm_term'        => $_SESSION['utms']['utm_term'],    // utm_term
    'utm_content'     => $_SESSION['utms']['utm_content'], // utm_content
    'utm_campaign'    => $_SESSION['utms']['utm_campaign'],// utm_campaign
    'additional_1'    => '',                               // Дополнительное поле 1
    'additional_2'    => '',                               // Дополнительное поле 2
    'additional_3'    => '',                               // Дополнительное поле 3
    'additional_4'    => '',                                // Дополнительное поле 4
    'sid1' 			  => $_SERVER["HTTP_HOST"],	//klo
	'sid2'            => $my_id					//klo
);

// запрос
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'http://office2.lp-crm.biz/api/addNewOrder.html');
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
$out = curl_exec($curl);
curl_close($curl);

//klo
$upd = ['id' => $my_id, 'response_api' => $result];
file_get_contents('http://vorobei777.beget.tech/api/update_lead?'.http_build_query($upd));

//$out – ответ сервера в формате JSON
 /* Здесь проверяется существование переменных */
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 if (isset($_POST['name'])) {$client = $_POST['name'];}


/* Сюда впишите свою эл. почту */
$address = "sergejmarcenko889@gmail.com";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Тема: OPTI VISION\nТелефон: $phone\nИмя: $client";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ OPTI VISION'; //сабж
$email='Заказ <mag-lend>'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Location: ./../good.html');
// header('Refresh: 3; URL=index.html');
?>