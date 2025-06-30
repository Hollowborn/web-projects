const form = document.getElementById("form");
const inputValue = document.getElementById("input");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let ulState = 0;
if (todos) {
  todos.forEach((todo) => {
    addTodoList(todo);
  });
}

// Create on click listener for form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoList(inputValue.value);
  addToLocalStorage();
  inputValue.value = "";
});

// Event listener for removing

function addTodoList(task) {
  if (ulState == 0) {
    const todo_list = document.createElement("ul");
    todo_list.setAttribute("id", "todo_list");
    form.appendChild(todo_list);
    ulState++;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
    addToLocalStorage(); // Update storage after removal
  });
  todo_list.appendChild(li);
  addToLocalStorage();
}

function addToLocalStorage() {
  let todoElements = document.querySelectorAll("li");
  const todosHere = [];
  todoElements.forEach((element) => {
    todosHere.push(element.textContent);
  });
  localStorage.setItem("todos", JSON.stringify(todosHere));
}
