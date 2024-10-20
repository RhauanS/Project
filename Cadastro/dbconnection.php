<?php
	$username = 'root';
	$password = '';
	$servename = 'localhost';
	$dbname = 'Cadastro_user';

	$conn = new mysqli($servename, $username, $password, $dbname);

	if($conn->connect_error) {
		die("Falha ao conectar com banco de dados: " . $conn->connect_error);
	}

?>
