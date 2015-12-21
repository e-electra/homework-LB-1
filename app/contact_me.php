<?php
	//header("Content-Type: application/json");
	//header("Content-Type: application/json");

	$name = htmlentities(strip_tags(trim($_POST['name'])));
	$email = htmlentities(strip_tags(trim($_POST['email'])));
	$mess = htmlentities(strip_tags(trim($_POST['message'])));
	$captcha = $_POST['g-recaptcha-response'];
	$ip = $_SERVER['REMOTE_ADDR'];

	$secret_key = "6LfohBMTAAAAADCZBgxfbUfmhWvJgDZ6M1A9JKv0";
	$public_key = "6LfohBMTAAAAAOXV96zJp-9kY1YB7tFXaeNhyUdD";

	$data = array();

	function check_captcha($key, $captcha, $ip) {
		$url_to_send = 'https://www.google.com/recaptcha/api/siteverify?secret='.$key.'&response='.$captcha.'&ip='.$ip;
		$data_request = file_get_contents($url_to_send);
		$resp_data = json_decode($data_request, true);

		if (isset($resp_data['success']) && $resp_data['success'] == 1) {
			return true;
		} else {
			return false;
		}
	}
		
	if ($name === '' && $email === '' && $mess === '') {
		$data['status'] = 'error';
		$data['text'] = "Заполните поля!";
	} elseif (!check_captcha($secret_key, $captcha, $ip)) {
		$data['status'] = 'error';
		$data['text'] = "Вы все-таки робот!";
	}
	 else {
	 	$data['status'] = 'success';
		$data['text'] = "Запрос прошел успешно";
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>