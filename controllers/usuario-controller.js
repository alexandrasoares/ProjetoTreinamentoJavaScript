const listaUsuario = document.querySelector('.lista-usuario');
const usuarioForm = document.querySelector('.form-usuario');

// Variaveis Formulário
const nomeUsuario = document.getElementById('nome_usuario');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const sexo = document.getElementById('sexo');
const dataNas = document.getElementById('data_nas');
const urlAPI = 'http://localhost:3000/usuario'
let dadosUsuario = '';

const exibirUsuarios = (u) => {
    Array.from(u).forEach(lista => {
        console.log(lista)
        dadosUsuario += `
        <tr>
            <td>${lista.nome_empresa}</td>
            <td>${lista.nome_usuario}</td>
            <td>${lista.cpf}</td>
            <td>${lista.email}</td>
            <td>${lista.dataNasc}</td>
            <td>
                <button>Editar</button>
            </td>
            <td>
                <button>Excluir</button>
            </td>
        </tr>
        `;
    });
    listaUsuario.innerHTML = dadosUsuario;
}

// METODO GET

fetch(urlAPI)
    .then(s => s.json())
    .then(dados => exibirUsuarios(dados))

// METODO POST 

usuarioForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(urlAPI, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome_usuario: nomeUsuario.value,
            cpf: cpf.value,
            email: email.value,
            sexo: sexo.value,
            dataNas: dataNas.value
        })
    })
    .then(res => res.json())
    .then(data =>{
        const postLista = [];
        postLista.push(data);
    })

})