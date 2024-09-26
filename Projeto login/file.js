document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    
    form.addEventListener("submit", function(event) {
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const submitButton = document.getElementById("submit");
        const message = document.getElementById("usuarioStatus"); // Movido para cá
        let valid = true;

        if (nome.value.length === 0) {
            alert("Entrada inválida, tente novamente!");
            valid = false;
        }

        if (!validateEmail(email.value)) {
            alert("Insira um email válido!");
            valid = false;
        }

        if (senha.value.length < 6) {
            alert("A senha deve conter pelo menos 6 caracteres!");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
            return;
        }

        
        message.textContent = "Usuário salvo com sucesso"; 
        message.style.color = "green";

        submitButton.disabled = true;
        submitButton.value = "Enviando...";
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    document.getElementById("senha").addEventListener("input", function() {
        const senha = this.value;
        const feedback = document.getElementById("senhaFeedback");

        if (senha.length < 6) {
            feedback.textContent = "Senha pequena";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Ótima senha";
            feedback.style.color = "blue";
        }
    });
});
