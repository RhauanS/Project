<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Resultado</title>
	<link rel="stylesheet" type="text/css" href="../Cadastro/style.css">
</head>
<body>
	<header>
		<h1>Salvo</h1>
	</header>

	<main>
		<?php
			$nome = htmlspecialchars($_POST["nome"]);
			$sobrenome = htmlspecialchars($_POST["sobrenome"]);
			$mae = htmlspecialchars($_POST["mae"]);
			$empresa = htmlspecialchars($_POST["empresa"]);
			$sexo = htmlspecialchars($_POST["sexo"]);
			$email = htmlspecialchars($_POST["email"]);
			$senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);


			echo "Seu nome é $nome e seu sobrenome $sobrenome, nome da mãe $mae, seu atual emprego é na empresa $empresa sexo $sexo com email de $email e senha $senha";


		?>
	</main>

</body>
</html>