
let tasks = JSON.parse(localStorage.getItem("taskList")) || [];

function saveTasks() {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // clear previous items

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = task;
    span.className = "task-text";

    const actions = document.createElement("div");
    actions.className = "actions";

    const updateBtn = document.createElement("button");
    updateBtn.innerText = "✏️ Update";
    updateBtn.onclick = () => updateItem(index);

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "🗑️ Delete";
    removeBtn.onclick = () => removeItem(index);

    actions.appendChild(updateBtn);
    actions.appendChild(removeBtn);

    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value) {
    tasks.push(value);
    saveTasks();
    renderTasks();
    input.value = "";
  }
}

function removeItem(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function updateItem(index) {
  const newTask = prompt("Update your task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    saveTasks();
    renderTasks();
  }
}

// Initial render
renderTasks();
