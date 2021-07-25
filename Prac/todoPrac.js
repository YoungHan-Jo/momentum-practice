const toDoForm = document.getElementById("toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("toDo-list");

const TODOS_KEY = "toDos";

let arrToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(arrToDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  arrToDos = arrToDos.filter((toDoObj) => toDoObj.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const btn = document.createElement("button");
  btn.addEventListener("click", deleteToDo);
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  paintToDo(newToDoObj);
  arrToDos.push(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  arrToDos = JSON.parse(savedToDos);
  arrToDos.forEach(paintToDo);
}
