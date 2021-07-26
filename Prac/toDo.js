const toDoForm = document.getElementById("toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("toDo-list");

const TODOS_KEY = "todos";

let arrToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(arrToDos));
}

function deleteToDo(item) {
  const li = item.target.parentElement;
  arrToDos = arrToDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(toDoObj) {
  const li = document.createElement("li");
  li.id = toDoObj.id;
  const span = document.createElement("span");
  span.innerText = toDoObj.toDo;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  const id = Date.now();
  const toDoObj = {};
  toDoObj.toDo = newToDo;
  toDoObj.id = id;

  paintToDo(toDoObj);
  arrToDos.push(toDoObj);
  saveToDos();

  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedToDos !== null) {
  arrToDos = savedToDos;
  arrToDos.forEach(paintToDo);
}
