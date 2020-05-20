const list = document.querySelector(".list");

function addItem() {
    const inputAdd = document.querySelector(".addItem");
    const li = document.createElement("li");
    list.appendChild(li);
    li.innerText = inputAdd.value;
    inputAdd.value = "";
}

function delItem() {
    list.innerHTML = null;
}

