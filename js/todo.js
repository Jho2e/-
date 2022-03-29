const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDosArray = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDosArray));
}

function paintToDo(yy) {
  const createLi = document.createElement("li");
  createLi.id = yy.id;
  const createSpan = document.createElement("span");
  createSpan.innerText = yy.text;

  function deleteToDo(event) {
    const wantDelete = event.target.parentElement;
    wantDelete.remove();
    toDosArray = toDosArray.filter((item) => item.id !== parseInt(createLi.id));
    saveToDos();
  }
  const createBtn = document.createElement("button");
  createBtn.innerText = "🍚";
  createBtn.addEventListener("click", deleteToDo);

  createLi.appendChild(createSpan);
  createLi.appendChild(createBtn);
  toDoList.appendChild(createLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };

  toDosArray.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDosArray = parsedToDos;

  parsedToDos.forEach(paintToDo);
  /*  parsedToDos.forEach((item) => console.log("맛있겠다.", item, "!"));
   */
}
