const fEmpresa = document.getElementById('formEmpresa');

formEmpresa.addEventListener('submit', (e) => {
    e.preventDefault();

    const idEmpresa = document.getElementById('id_empresa').value;
    const nomeEmpresa = document.getElementById('nome_empresa').value;
    const email = document.getElementById('email').value;
    const cnpj = document.getElementById('cnpj').value;
    const dataCadastro = document.getElementById('data_cadastro').value;
    const dataAtualizacao = document.getElementById('data_alteracao').value;

    heads = new Headers();

    // POST
    // fetch('https://localhost:44379/empresa', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         id_empresa: idEmpresa,
    //         nomeEmpresa: nomeEmpresa,
    //         email: email,
    //         cnpj: cnpj,
    //         dataCadastro: dataCadastro,
    //         dataAtualizacao: dataAtualizacao
    //     }),
    //     cache: 'no-cache',
    //     credentials: 'same-origin', 
    //     headers: heads,
    //     mode: 'cors',
    // })
    // .then(response => {
    //     console.log('Response', response);
    //     return response.text();
    // })
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    // GET
    fetch('https://localhost:44379/empresa', {
        method: 'GET'
    })
    .then(response => {
        return response.json
    }).then(data => {
        console.log(data);
    })
});

// GET

// GET ID

// POST

// PUT

// DELET