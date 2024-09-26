<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>formularios estilizandos 2 </title>
	<link rel="stylesheet" href="style.css">	
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);
    
    echo "Usuário " . $nome . " e email " . $email . " com a senha foram salvos com sucesso.";
}
?>


</body>

</html>