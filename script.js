document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const country = document.getElementById('country').value;
    const comments = document.getElementById('comments').value;

    if (!name || !email || !password) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Dados Enviados:</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Senha:</strong> ${password}</p>
        <p><strong>Gênero:</strong> ${gender}</p>
        <p><strong>País:</strong> ${country}</p>
        <p><strong>Comentários:</strong> ${comments}</p>
    `;

    // Alterar título
    document.querySelector('h1').innerText = "Formulário Enviado com Sucesso!";

    // Estilo dinâmico
    document.querySelector('form').style.backgroundColor = "#d4edda";
});
