// // const inputs = document.querySelectorAll(".input-container");

// // inputs.forEach(input => {
// //     input.addEventListener("click", function () {
// //         const teste = input.value.trim()
// //         if (input.value.trim() !== "") {
// //             input.style.border = "2px solid green";
// //         } else {
// //             input.style.border = "2px solid red";
// //         }
// //     });
// // });

// // const inputs = document.querySelectorAll(".input-container input, .input-container textarea");

// // inputs.forEach(input => {
// //     input.addEventListener("click", function () {
// //         if (input.value.trim() !== "") {
// //             input.style.border = "2px solid green";
// //             input.nextElementSibling.style.display = "none";
// //         } else {
// //             input.style.border = "2px solid red";
// //             input.nextElementSibling.style.display = "block";
// //         }
// //     });
// // });

// const inputs = document.querySelectorAll(".input-container input, .input-container textarea");
// const botaoEnviar = document.querySelector(".botao");
// const campoNome = document.querySelector("input[name='nome']");

// botaoEnviar.addEventListener("click", function(event) {
//     event.preventDefault(); // Evita o envio do formulário até que a validação esteja completa
    
//     let formValido = true;
    
//     inputs.forEach(input => {
//         if (input.value.trim() !== "") {
//             input.style.border = "2px solid green";
//             input.nextElementSibling.style.display = "none"; 
//         } else {
//             input.style.border = "2px solid red";
//             input.nextElementSibling.style.display = "block";
//             formValido = false;
//         }
//     });

//     if (formValido) {
//         // Se todos os campos estão preenchidos, o formulário pode ser enviado
//         alert("Formulário enviado com sucesso!");
//     } else {
//         alert("Por favor, preencha todos os campos obrigatórios.");
//         campoNome.focus();
//     }
// });

const inputs = document.querySelectorAll(".input-container input, .input-container textarea");
const botaoEnviar = document.querySelector(".botao");
const campoNome = document.querySelector("input[name='nome']");
const campoEmail = document.querySelector("input[name='email']");

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    let formValido = true;
    
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            if (input.name === "email" && !validarEmail(input.value)) {
                input.style.border = "2px solid red";
                input.nextElementSibling.style.display = "block"; 
                formValido = false;
                alert("Por favor, preencha o email no formato correto, usando --algo@seuservidordeemal.com.");
            } else {
                input.style.border = "2px solid green";
                input.nextElementSibling.style.display = "none"; 
            }
        } else {
            input.style.border = "2px solid red";
            input.nextElementSibling.style.display = "block";
            formValido = false;
        }
    });

    if (formValido) {
        
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
        campoNome.focus();
    }
});