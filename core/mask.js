// MASCARAS

const masks = {
    cnpj(cnpj) {
        console.log('teste', cnpj)
        return cnpj
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const documento = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        e.target.value = masks[documento](e.target.value);
    }, false);
})