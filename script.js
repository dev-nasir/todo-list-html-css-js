let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let btn = document.querySelector(".btnCon")

function Add() {
    if (inputs.value == "") {
        alert("Please Enter task")
    }

    else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}<i class="fa fa-trash" aria-hidden="true"></i>`;

        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        text.appendChild(newEle);

        if (text.childElementCount > 1 && !btn.hasChildNodes()) {
            const button = document.createElement('button')
            button.innerText = 'DeleteAll'
            button.style.color = "white"
            button.addEventListener("click", DeleteAll);
            btn.appendChild(button)

        }

        function remove() {
            newEle.remove()

            if (text.childElementCount === 1) {
                btn.innerHTML = "";
            }
        }
    }
}

function DeleteAll() {
    text.innerHTML = "";
    btn.innerHTML = "";

};




