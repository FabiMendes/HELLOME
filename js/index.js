// Seleciona o formulário de login com o id "signin"
var formSignin = document.querySelector('#signin');

// Seleciona o formulário de cadastro com o id "signup"
var formSignup = document.querySelector('#signup');

// Seleciona o elemento com a classe "btnColor", que provavelmente é a barra colorida entre os botões
var btnColor = document.querySelector('.btnColor');

// Adiciona um ouvinte de evento de clique ao botão de login com o id "btnSignin"
document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    // Move o formulário de login para a esquerda (aparece na tela)
    formSignin.style.left = "25px";
    // Move o formulário de cadastro para a direita (some da tela)
    formSignup.style.left = "450px";
    // Move a barra colorida para a esquerda
    btnColor.style.left = "0px";
});

// Adiciona um ouvinte de evento de clique ao botão de cadastro com o id "btnSignup"
document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    // Move o formulário de login para a esquerda (some da tela)
    formSignin.style.left = "-450px";
    // Move o formulário de cadastro para a direita (aparece na tela)
    formSignup.style.left = "25px";
    // Move a barra colorida para a direita
    btnColor.style.left = "110px";
});
