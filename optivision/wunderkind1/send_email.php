<?php

session_start();

// $first_name = $_POST['form_review__name'];
/* Сюда впишите свою эл. почту */
$address = "vrassrochky.by@gmail.com";
/* А здесь прописывается текст сообщения, \n - перенос строки */
//  $mes = " \nИмя: $first_name";
 $comment = $_POST['forum-text'];
 $email='Форма отзывов с сайта: https://luuk.by/optivision/wunderkind1/'; // от кого
//  $message="\r\n$email \r\n$comment";
 $send = mail ($address,$email,"\r\nОтзыв: $comment");
?>

<!-- Переадресация на главную страницу сайта, через 3 секунды -->
<script language="JavaScript" type="text/javascript">
	function changeurl() {
		eval(self.location = "https://luuk.by/optivision/wunderkind1/#footer");
	}
	window.setTimeout("changeurl();", 2500);
	
</script>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Спасибо за отзыв</title>

    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

        body {
            font-family: "Courier New", Courier, monospace;
        }

        .wrap {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h1 {
            text-align: center;
            font-size: 45px;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <h1>Спасибо за отзыв!</h1>
    </div>
</body>

</html>