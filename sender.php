<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];
    $value = $_POST['value'];
    
    $to  = $_POST['surname'] . ', ';  // обратите внимание на запятую
    $to  .= 'abraham063105@gmail.com';
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = 'onishek@ukr.net';
	$subject = "Заявка c сайта";

	
	$msg="
    Количество: $name 
    Тип валюты: $value
    Почта: $surname 
    Телеграм: $phone 
    Номер карточки: $email"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

