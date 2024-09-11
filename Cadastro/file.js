// Função para validar e processar o formulário
document.getElementById('myForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação do email
    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault(); // Impede o envio do formulário
    }

    // Validação da senha
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        event.preventDefault(); // Impede o envio do formulário
    }

    // Desabilitar o botão de enviar e mostrar mensagem ao enviar
    const submitButton = this.querySelector('input[type="submit"]');
    submitButton.disabled = true;
    submitButton.value = 'Enviando...';
});

// Função para validar o email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Feedback em tempo real da senha
document.getElementById('senha').addEventListener('input', function() {
    const senha = this.value;
    const feedback = document.getElementById('senhaFeedback');

    if (senha.length < 6) {
        feedback.textContent = 'Senha fraca. Deve ter pelo menos 6 caracteres.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Senha forte.';
        feedback.style.color = 'green';
    }
});

// Autocompletar para campo de empresa
const empresas = ['Empresa A', 'Empresa B', 'Empresa C'];

document.getElementById('empresa').addEventListener('input', function() {
    const value = this.value.toLowerCase();
    const suggestions = empresas.filter(emp => emp.toLowerCase().includes(value));
    
    // Exemplo de lógica para exibir sugestões (simples)
    const suggestionBox = document.getElementById('suggestionBox');
    suggestionBox.innerHTML = ''; // Limpar sugestões anteriores
    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.textContent = suggestion;
        suggestionBox.appendChild(div);
    });
});

// Adicionar um novo campo
function addField() {
    const newField = document.createElement('input');
    newField.type = 'text';
    newField.name = 'additionalField';
    document.querySelector('form').appendChild(newField);
}

// Adicionar um ouvinte de evento para o botão de adicionar campo
document.getElementById('addFieldButton').addEventListener('click', addField);
