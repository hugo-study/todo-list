function removeItem(element) {
    element.parentElement.remove()
}

function insertItem(text) {
    if(text.trim()) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        var buttons = document.createElement("div");
        var deleteButton = document.createElement("button");
        var closeButton = document.createElement("button");

        buttons.appendChild(deleteButton);
        buttons.appendChild(closeButton);

        deleteButton.classList.add("list-li-button")
        deleteButton.innerText = "Excluir"
        deleteButton.onclick = () => {
            ul.removeChild(li)
        }

        closeButton.classList.add("list-li-button")
        closeButton.innerText = "Concluir";
        closeButton.onclick = () => {
            li.classList.add("list-li-close")
        }
        li.innerText = text;
        li.classList.add("list-li");
        li.appendChild(buttons);

        ul.appendChild(li);
        clearInput();
    }
}

document.querySelector('#button-action').onclick = () => {
    const text = document.querySelector('#input').value;
    insertItem(text);
}

document.querySelector('#input').onkeypress = (e) => {
    if (e.key === 'Enter') {
        const text = document.querySelector('#input').value;
        insertItem(text);
    }
}

document.querySelector('#button-clean').onclick = clearInput();

function clearInput() {
    document.querySelector('#input').value = '';
}