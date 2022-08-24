document.querySelector('#button-action').onclick = () => {
    const nome = document.querySelector('#input').value
    if(nome) {
        alert(`Hello ${nome}`)
    }
}

document.querySelector('#button-clean').onclick = () => {
    document.querySelector('#input').value = ''
}