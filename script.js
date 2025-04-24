document.getElementById("loginButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Funções de validação
    const isValidEmail = email.includes("@");
    const isValidPassword = password.length >= 6;

    if (isValidEmail && isValidPassword) {
        // Redireciona para a página "pagina2.html" com uma mensagem de boas-vindas
        window.location.href = "pagina2.html";
    } else {
        // Exibe mensagem de erro e botão de retorno ao login
        const loginContainer = document.getElementById("loginContainer");
        loginContainer.innerHTML = `
            <div class="error-message text-center">
                <h1>Erro no Login</h1>
                <p>E-mail ou senha inválidos. Verifique as informações e tente novamente.</p>
                <button id="retryButton" class="retry-button">Voltar ao Login</button>
            </div>
        `;
        loginContainer.style.background = "#ffe0e0";
        loginContainer.style.color = "#d9534f";
        loginContainer.style.borderRadius = "10px";
        loginContainer.style.padding = "20px";

        // Adiciona evento ao botão de voltar ao login
        document.getElementById("retryButton").addEventListener("click", function () {
            // Redireciona para a página 'index.html'
            window.location.href = "index.html";
        });
    }
});

// Adiciona evento para pressionar a tecla Enter
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("loginButton").click();
    }
});
