const inputs = document.querySelectorAll(".input-container input, .input-container textarea");
const botaoEnviar = document.querySelector(".botao");

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    let formValido = true;
    let primeiroCampoInvalido = null; // Armazena o primeiro campo que precisa ser preenchido
    
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            if (input.name === "email" && !validarEmail(input.value)) {
                input.style.border = "2px solid red";
                input.nextElementSibling.style.display = "block"; 
                formValido = false;
                if (!primeiroCampoInvalido) primeiroCampoInvalido = input; // Define o primeiro campo inválido
                alert("Por favor, preencha o email no formato correto, usando --algo@seuservidordeemal.com.");
            } else {
                input.style.border = "2px solid green";
                input.nextElementSibling.style.display = "none"; 
            }
        } else {
            input.style.border = "2px solid red";
            input.nextElementSibling.style.display = "block";
            formValido = false;
            if (!primeiroCampoInvalido) primeiroCampoInvalido = input; // Define o primeiro campo inválido
        }
    });

    if (formValido) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
        if (primeiroCampoInvalido) primeiroCampoInvalido.focus(); // Foca no primeiro campo inválido
    }
});
