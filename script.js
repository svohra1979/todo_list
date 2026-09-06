// select elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const themeToggle = document.getElementById("themeToggle");

// state
let todos = [];

// theme
function loadTheme() {
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark-mode", darkModeEnabled);
  updateThemeButton(darkModeEnabled);
}

function updateThemeButton(darkModeEnabled) {
  themeToggle.textContent = darkModeEnabled ? "Light mode" : "Dark mode";
  themeToggle.setAttribute(
    "aria-label",
    darkModeEnabled ? "Switch to light mode" : "Switch to dark mode"
  );
}

themeToggle.addEventListener("click", function () {
  const darkModeEnabled = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", darkModeEnabled);
  updateThemeButton(darkModeEnabled);
});

// load todos from localStorage
function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }
}

// save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// add todo
addBtn.addEventListener("click", addTodo);
function addTodo() {
  const todoText = todoInput.value.trim();
  if (!todoText) return;
  const newTodo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
  todoInput.value = "";
}

// render todos
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(function (todo) {
    const div = document.createElement("div");
    div.innerHTML = `
        <input type="checkbox">
        <span>${todo.text}</span>
        <button>Delete</button>
        `;

    // toggle complete
    const checkbox = div.querySelector("input");
    checkbox.addEventListener("click", function () {
      todo.completed = checkbox.checked;
      saveTodos();
    });

    // delete todo (with confirm)
    const deleteBtn = div.querySelector("button");
    deleteBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this todo?")) {
        todos = todos.filter((t) => t.id !== todo.id);
        saveTodos();
        renderTodos();
      }
    });
    todoList.appendChild(div);
  });
}

// clear completed
clearCompletedBtn.addEventListener("click", function () {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
});

// initialize/load on start
loadTheme();
loadTodos();
renderTodos();
