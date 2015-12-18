<?php

	$name = $_POST['names'];
	$data = array();

		
	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = "Заполните имя!";
	} else {
		$data['mes'] = 'OK';
		$data['text'] = "Вы не забыли заполнить имя";
	}


	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>