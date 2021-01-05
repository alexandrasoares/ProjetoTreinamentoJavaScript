const listaEmpresa = document.querySelector('.lista-empresa');
const empresaForm = document.querySelector('.form-empresa');

// Variaveis Formulário
const nomeUsuario = document.getElementById('nome_empresa');
const email = document.getElementById('email');
const cnpj = document.getElementById('cnpj');
const dataCad = document.getElementById('data_cadastro');
const dataAlt = document.getElementById('data_alteracao');
const urlAPI = 'http://localhost:3000/empresa'
let dadosEmpresa = '';

const exibirEmpresas = (u) => {
    Array.from(u).forEach(lista => {
        console.log(lista.cnpj)
        dadosEmpresa += `
        <tr>
        <td>${lista.nome_empresa}</td>
        <td>${lista.email}</td>
        <td>${lista.cnpj}</td>
        <td>${lista.data_cadastro}</td>
        <td>${lista.data_alteracao}</td>
        <td>
            <button onclick="editar()">Editar</button>
        </td>
        <td>
            <button>Excluir</button>
        </td>
    </tr>
        `;
    });

    if (listaEmpresa) {
        listaEmpresa.innerHTML = dadosEmpresa;    
    }
}

// METODO GET

fetch(urlAPI)
    .then(s => s.json())
    .then(dados => exibirEmpresas(dados))

// METODO POST 

if (empresaForm) {
    empresaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(urlAPI, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome_empresa: nomeUsuario.value,
                email: email.value,
                cnpj: cnpj.value,
                data_cadastro: dataCad.value,
                data_alteracao: dataAlt.value
            })
        })
        .then(res => res.json())
        .then(data =>{
            const postListaEmpresa = [];
            postListaEmpresa.push(data);
            console.log(postListaEmpresa);
        })
    }) 
}

// METODO PUT

function editar() {
    window.location.href = 'adicionar-empresa.html';
    fetch(`${urlAPI}/${id}`)
    .then(s => s.json())
    .then(dados => exibirEmpresas(dados))

    return fetch(urlAPI, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome_empresa: nomeUsuario.value,
            email: email.value,
            cnpj: cnpj.value,
            data_cadastro: dataCad.value,
            data_alteracao: dataAlt.value
        })
    })
}

function excluir(item, url) {
    return fetch(url + '/' + item, {
      method: 'delete'
    })
    .then(response => response.json());
}
