<?php
    session_start();
    include('file.php'); // Certifique-se de que este arquivo contém a conexão ao banco de dados

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Recebendo e protegendo os dados
        $nome = htmlspecialchars($_POST['nome']);
        $sobrenome = htmlspecialchars($_POST['sobrenome']);
        $mae = htmlspecialchars($_POST['mae']);
        $empresa = htmlspecialchars($_POST['empresa']);
        $sexo = htmlspecialchars($_POST['sexo']);
        $email = htmlspecialchars($_POST['email']);
        $senha = htmlspecialchars($_POST['senha']);

        // Inserindo os dados no banco de dados
        $sql = "INSERT INTO usuarios (nome, sobrenome, mae, empresa, sexo, email, senha) 
                VALUES (?, ?, ?, ?, ?, ?, ?)";

        // Preparando a consulta
        if($stmt = $conn->prepare($sql)) {
            // Bind de parâmetros (s - string, neste caso todos são strings)
            $stmt->bind_param("sssssss", $nome, $sobrenome, $mae, $empresa, $sexo, $email, $senha);

            // Executando a consulta
            if($stmt->execute()) {
                echo "Usuário inserido com sucesso!";
            } else {
                echo "Erro ao inserir usuário: " . $stmt->error;
            }

            // Fechar a declaração
            $stmt->close();
        } else {
            echo "Erro na preparação da consulta: " . $conn->error;
        }

        // Fechar a conexão
        $conn->close();
    }
?>
