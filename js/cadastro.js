async function cadastroUsuario() {   
    const url = 'https://go-wash-api.onrender.com/api/user';
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpf_cnpj = document.getElementById('cpf_cnpj').value;
    var birthday = document.getElementById('data').value;


        let resposta = await fetch(url,{
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "email": email,
                "user_type_id": 1,
                "password": password,
                "cpf_cnpj": cpf_cnpj,
                "terms": 1,
                "birthday": birthday    
            }),
            headers: {
                'Content-Type': 'application/json'
            }        
        });

        let data = await resposta.json();
        console.log(data);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!"); // Exibe um alerta se o cadastro for bem-sucedido
            window.location.href = "loginEcadastro.html"; // Redireciona para a página de login
        } else {
            if (data && data.errors) { //condição que verifica se o objeto data está definido e se possui uma propriedade errors.
                // Se houver erros retornados pela API, exibe esses erros
                alert("Erro ao enviar o cadastro: " + JSON.stringify(data.errors)); //JSON.stringify(data.errors) esta convertendo o objeto de erro em uma string Json
            } else {
                alert("Ocorreu um erro ao enviar o cadastro. Por favor, tente novamente."); // Exibe um alerta genérico de erro
            }
        }
}


