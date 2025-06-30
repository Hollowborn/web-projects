const form = document.getElementById("form");
const inputValue = document.getElementById("input");

// let todo = JSON.parse(localStorage.getItem(todos));
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
  addToLocalStorage(inputValue.value);
  inputValue.value = "";
});

function addTodoList(task) {
  if (ulState == 0) {
    const todo_list = document.createElement("ul");
    todo_list.setAttribute("id", "todo_list");
    form.appendChild(todo_list);
    ulState++;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  todo_list.appendChild(li);
}
function addToLocalStorage(task) {
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}
