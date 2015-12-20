<?php
	//header("Content-Type: application/json");
	$name = $_POST['names'];
	$file = $_FILES['my_file'];
	$url = $_POST['links'];
	$descr = $_POST['areas'];


	$data = array();

		
	if ($name === '' && $url === '' && $descr === '') {
		$data['status'] = 'error';
		$data['text'] = "Заполните имя!";
	} elseif ( $file && ($file['type'] != 'image/png' || $file['type'] != 'image/jpeg') ) {
		$data['mes_file'] = 'Неправильный тип файла';
		$data['mes_f_type'] = $file['type'];
	}
	 else {
	 	$data['status'] = 'success';
		$data['text'] = "Запрос прошел успешно";
	}

	//print_r($_POST);
	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>