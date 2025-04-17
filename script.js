document.getElementById("loginButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        // Limpa o conteúdo da página
        const loginContainer = document.getElementById("loginContainer");
        loginContainer.innerHTML = `
            <div class="success-message text-center">
                <h1>Login realizado com sucesso!</h1>
                <p>Bem-vindo! Você fez login com sucesso.</p>
            </div>
        `;
        loginContainer.style.background = "#fff";
        loginContainer.style.color = "#000";
        loginContainer.style.borderRadius = "10px";
        loginContainer.style.padding = "20px";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
