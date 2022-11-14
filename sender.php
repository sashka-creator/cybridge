<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];
    
    $to  = 'bigoleksandr@gmail.com';
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = 'onishek@ukr.net';
	$subject = "Ответ на вакансию";

	
	$msg="
    Имя: $name 
    E-mail: $value
    Сообщение: $surname"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

