const url = 'https://go-wash-api.onrender.com/api/auth/address';

async function getEnderecoUsuario() {
    try {
        let user = localStorage.getItem('user'); //obtém os dados do usuário armazenados no local storage do navegador.
        let token = JSON.parse(user).access_token; // analisa o JSON para extrair o token de acesso.

        const resposta = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        });

        const data = await resposta.json();
        console.log(data);

        if (data && data.data && data.data.length > 0) { //verifica se os dados existem e se contêm pelo menos um endereço.
            exibirDados(data.data); //para exibir os endereços na tabela.
        } else {
            console.log("Nenhum endereço encontrado.");
        }
    } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados:", error);
    }
}

function exibirDados(enderecos) { //recebe uma lista de endereços e os exibe na tabela.
    const tabela = document.getElementById('dados-api');

    enderecos.forEach(endereco => {
        const linha = criaLinha(endereco);
        tabela.appendChild(linha);
    });
}

function criaLinha(endereco) {
    const linha = document.createElement("tr"); //cria uma linha de tabela (<tr>) para um endereço.

    /*Para cada campo do endereço, cria uma célula de tabela (<td>), define seu conteúdo (textContent), 
    e adiciona a célula à linha. */

    const tdId = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdCEP = document.createElement("td");
    const tdAddress = document.createElement("td");
    const tdNumber = document.createElement("td");
    const tdComplement = document.createElement("td");

    tdId.textContent = endereco.id;
    tdTitle.textContent = endereco.title;
    tdCEP.textContent = endereco.cep;
    tdAddress.textContent = endereco.address;
    tdNumber.textContent = endereco.number;
    tdComplement.textContent = endereco.complement || "-"; // Se complemento for null, exibe "-"

    /*O método appendChild é usado para construir dinamicamente a estrutura da linha da tabela,
     adicionando cada célula na ordem correta.*/
     
    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
    linha.appendChild(tdCEP);
    linha.appendChild(tdAddress);
    linha.appendChild(tdNumber);
    linha.appendChild(tdComplement);

    return linha;
}

getEnderecoUsuario();
