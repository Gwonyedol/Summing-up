const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
    }else{

    }
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="X";
    const span = document.createElement("span");
    const newId = toDos.length+1;

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoDbj = {
        text: text,
        id: newId
    };

    toDos.push(toDoDbj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
init();