const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function VerificacaoCampos() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpf_cnpj = document.getElementById("cpf_cnpj").value;
  var data = document.getElementById("data").value;
  var Terms = document.getElementById("Terms").checked;
  if (name.length < 3) {
    alert("O nome precisa ter no mínimo 3 caracteres");
    return
  }
  if (!emailRegex.test(email)) {
    alert("O email não é válido");
    return
  }
  if (password.length < 8) {
    alert("A senha precisa ter no mínimo 8 caracteres");
    return
  }
  if (cpf_cnpj.length < 11) {
    alert("O CPF/CNPJ precisa ter no mínimo 11 caracteres");
    return
  }
  if (data == "") {
    alert("A data de nascimento precisa ser preenchida");
    return
  }
  if (!Terms) {
    alert("É bom concordar com os termos");
    return
  }
  cadastroUsuario();
}

//aparece a borda vermelha mostrando o erro 
function setError(login) {
  campos[login].style.border = '2px solid #e63636';
  spans[login].style.display = 'block';

}

//remove a borda vermelha do erro, quando for corrigido
function removeError(login) {
  campos[login].style.border = '';
  spans[login].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  }
  else {
    removeError(0);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  }
  else {
    removeError(1);
  }
}

function passwordValidate() {
  if (campos[2].value.length < 8) {
    setError(2);
  }
  else {
    removeError(2);
  }
}

function cpfValidate() {
  if (campos[3].value.length < 11) {
    setError(3);
  }
  else {
    removeError(3);
  }
  cadastroUsuario()
}
