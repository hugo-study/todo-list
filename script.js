function insertItem(text) {
    if(text.trim()) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.innerText = text;
        ul.appendChild(li);
    }
}

document.querySelector('#button-action').onclick = () => {
    const text = document.querySelector('#input').value;
    insertItem(text);
}

document.querySelector('#button-clean').onclick = () => {
    document.querySelector('#input').value = '';
}