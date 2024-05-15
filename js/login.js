async function LoginUsuario() {   
    const url = 'https://go-wash-api.onrender.com/api/login';
    var email1 = document.getElementById('email1').value;
    var password1 = document.getElementById('password1').value;

        let resposta = await fetch(url,{
            method: "POST",
            body: JSON.stringify({
                "email": email1,
                "password": password1,   
                "user_type_id": 1,
            }),
            headers: {
                'Content-Type': 'application/json'
            }        
        });

        let data = await resposta.json();
        console.log(data);

        if (resposta.ok) {
            alert("Login realizado com sucesso!"); // Exibe um alerta se o cadastro for bem-sucedido
            window.location.href = "cadastroEndereco.html"; // Redireciona para a página de login
        } else {
            if (data && data.errors) { //condição que verifica se o objeto data está definido e se possui uma propriedade errors.
                // Se houver erros retornados pela API, exibe esses erros
                alert("Erro em fazer o login: " + JSON.stringify(data.errors)); //JSON.stringify(data.errors) esta convertendo o objeto de erro em uma string Json
            } else {
                alert("Email ou senha inválido, verifique os dados novamente."); // Exibe um alerta genérico de erro
            }
        }

        localStorage.setItem('user', JSON.stringify(data));
}
