const STATUSES = {
  TODO: "todo",
  INPROGRESS: "inProgress",
  DONE: "done",
  BLOCKED: "blocked",
};

let todos = [
  {
    id: 1,
    text: "Shudee ugaah",
    status: STATUSES.TODO,
  },
  {
    id: 2,
    text: "hool hiih",
    status: STATUSES.TODO,
  },
  {
    id: 3,
    text: "mashin tseverleh",
    status: STATUSES.INPROGRESS,
  },
  {
    id: 4,
    text: "Nom unshih",
    status: STATUSES.DONE,
  },
  {
    id: 5,
    text: "Money oloh",
    status: STATUSES.BLOCKED,
  },
];

const todoTasksContainer = document.getElementById("todo_tasks_container");
const inProgressTasksContainer = document.getElementById(
  "inprogress_tasks_container"
);
const doneTasksContainer = document.getElementById("done_tasks_container");
const blockedTasksContainer = document.getElementById(
  "blocked_tasks_container"
);
const addTaskButton = document.getElementById("add_task_button");
const submitButton = document.getElementById("submit_button");
const dialogContainer = document.querySelector("div.dialog_container");
const dialog = document.querySelector("div.dialog");
const inputElement = document.getElementById("input_element");
const selectElement = document.getElementById("select_status");

const todoCountElement = document.getElementById("todoCount");
const inProgressCountElement = document.getElementById("inProgressCount");
const doneCountElement = document.getElementById("doneCount");
const blockedCountElement = document.getElementById("blockedCount");

//code dund ashiglah huvisagchud
let isCreatingTask = false;
let taskId = 0;

// console.log(addTaskButton, dialogContainer);

let count = 0;

function renderTodoApp() {
  let todoTasks = ``;
  let inProgessTasks = ``;
  let doneTasks = ``;
  let blockedTasks = ``;

  let todoTasksCount = 0;
  let inProgressTasksCount = 0;
  let doneTasksCount = 0;
  let blockedTasksCount = 0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status === STATUSES.TODO) {
      todoTasks += `<div class="task flex">
      <input
              type="checkbox"
              width="12px"
              height="12px"
              border-radius="50%"
              id=""
            />
                  <p>${todos[i].text}</p>
                  <button class="img_pen" onclick="editTask(${todos[i].id})"></button>
                  <button class="img_trash" onclick="removeTask(${todos[i].id})"></button>
                </div>`;
      todoTasksCount++;
    }

    if (todos[i].status === STATUSES.INPROGRESS) {
      inProgessTasks += `<div class="task flex">
      <input
              type="checkbox"
              width="12px"
              height="12px"
              border-radius="50%"
              id=""
            />
                  <p>${todos[i].text}</p>
                   <button class="img_pen" onclick="editTask(${todos[i].id})"></button>
                  <button class="img_trash" onclick="removeTask(${todos[i].id})"></button>
                </div>`;
      inProgressTasksCount++;
    }
    if (todos[i].status === STATUSES.DONE) {
      doneTasks += `<div class="task flex">
      <input
              type="checkbox"
              width="12px"
              height="12px"
              border-radius="50%"
              id=""
            />
                  <p>${todos[i].text}</p>
                   <button class="img_pen" onclick="editTask(${todos[i].id})"></button>
                  <button class="img_trash" onclick="removeTask(${todos[i].id})"></button>
                </div>`;
      doneTasksCount++;
    }
    if (todos[i].status === STATUSES.BLOCKED) {
      blockedTasks += `<div class="task flex">
      <input
              type="checkbox"
              width="12px"
              height="12px"
              border-radius="50%"
              id=""
            />
                  <p>${todos[i].text}</p>
                      <button class="img_pen" onclick="editTask(${todos[i].id})"></button>
                  <button class="img_trash" onclick="removeTask(${todos[i].id})"></button>
                </div>`;
      blockedTasksCount++;
    }
  }

  todoTasksContainer.innerHTML = todoTasks;
  inProgressTasksContainer.innerHTML = inProgessTasks;
  doneTasksContainer.innerHTML = doneTasks;
  blockedTasksContainer.innerHTML = blockedTasks;

  todoCountElement.innerText = todoTasksCount;
  inProgressCountElement.innerText = inProgressTasksCount;
  doneCountElement.innerText = doneTasksCount;
  blockedCountElement.innerText = blockedTasksCount;
  inputElement.value = "";
  selectElement.value = "";
  taskId = 0;
  isCreatingTask = false;
}

renderTodoApp();

addTaskButton.addEventListener("click", addTask);
submitButton.addEventListener("click", submit);

function addTask() {
  isCreatingTask = true;
  dialogContainer.classList.add("flex");
  if (todos.length == STATUSES.TODO) {
    const counter = document.getElementById("totalTasks").number;
  }
}

function submit() {
  if (isCreatingTask) {
    todos.push({
      text: inputElement.value,
      status: selectElement.value,
      id: randomIntFromInterval(),
    });
  } else {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === taskId) {
        todos[i].text = inputElement.value;
        todos[i].status = selectElement.value;
      }
    }
  }

  renderTodoApp();
  dialogContainer.classList.remove("flex");
}

function removeTask(id) {
  let filteredTodo = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      filteredTodo.push(todos[i]);
    }
  }
  todos = filteredTodo;
  renderTodoApp();
}

function editTask(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      inputElement.value = todos[i].text;
      selectElement.value = todos[i].status;
    }
  }
  taskId = id;
  dialogContainer.classList.add("flex");
}

function randomIntFromInterval() {
  return Math.floor(Math.random() * 1000);
}

dialogContainer.addEventListener("click", hideDialog);

function hideDialog(event) {
  event.stopPropagation();
  dialogContainer.classList.remove("flex");
}

dialog.addEventListener("click", function (event) {
  event.stopPropagation();
});
