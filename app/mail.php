<?
if(isset($_POST)) {
	include_once "smsc_api.php";
	$name = htmlspecialchars($_POST['name']);
	$phone =  htmlspecialchars($_POST['phone']);
	$formName = htmlspecialchars($_POST['formName']);
	$email = htmlspecialchars($_POST['email']);
	$sendto = "sumki-rf@yandex.ru";
	$subject = "Новая заявка с формы";
	$msg  = " ";
	$msg .= "<br><b>Форма: </b>".$formName."<br>";
	if($name !== '') {
		$msg .= "<b>Имя: </b>".$name."<br>";
	}
	if($email !=='') {
		$msg .= "<b>Email: </b>".$email."<br>";
	}
	$msg .= "<b>Телефон: </b>".$phone."<br>";
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: sumki-rf@yandex.ru\r\n";
	mail($sendto,$subject,$msg,$headers);

	if($email !=='') {
		// Отправка Прайса
		$subject_client = "Ваш Прайс-лист";
		$msg_client = " ";
		$msg_client .= "Cпасибо за заяку. Скачать Ваш прайс-лист вы можете по ссылке: <a href='http://katalog.sumki-rf.ru/'>http://katalog.sumki-rf.ru/</a>";
		$headers_client = "Content-type: text/html; charset=utf-8 \r\n";
		$headers_client .= "From: sumki-rf@yandex.ru \r\n";
		mail($email, $subject_client, $msg_client, $headers_client);
	}

	$phone = preg_replace('/[^0-9]/', '', $phone);
	$sms_text = "Заказ. Имя: ".$client.". Телефон: ".$phone;
	$sms_text = iconv("utf-8", "windows-1251", $sms_text);
	$r = send_sms("+79139229043", $sms_text);
}
?>