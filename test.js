const STATUSES = {
  TODO: "todo",
  INPROGRESS: "inProgess",
  DONE: "done",
  BLOCKED: "blocked",
};

const todos = [
  {
    title: "loan-managament",
    discription: " Add card component",
    status: STATUSES.TODO,
  },
  {
    title: "loan-managament",
    discription: " Add card component",
    status: STATUSES.TODO,
  },
  {
    title: "loan-managament",
    discription: " Add card component",
    status: STATUSES.INPROGRESS,
  },
  {
    title: "loan-managament",
    discription: " Add card component",
    status: STATUSES.DONE,
  },
  {
    title: "loan-managament",
    discription: " Add card component",
    status: STATUSES.BLOCKED,
  },
];

const statusTodoArray = [];
const statusInProgressArray = [];

for (let i = 0; i < todos.length; i++) {
  //filter by todo
  if (todos[i].status === STATUSES.TODO) {
    statusTodoArray.push(todos[i]);
  }
  //filter by inprogess
  if (todos[i].status === STATUSES.INPROGRESS) {
    statusInProgressArray.push(todos[i]);
  }
}

const boxElement = document.querySelector("div.box");

//Creating elements for statusTodoArray
for (let i = 0; i < statusTodoArray.length; i++) {
  const createdElement = document.createElement("div");
  createdElement.innerHTML = `<div class="todo">
                                  <h1>${statusTodoArray[i].title}</h1>
                                  <p>${statusTodoArray[i].discription}</p>
                                  <p>${statusTodoArray[i].status}</p>
                              </div>`;
  boxElement.appendChild(createdElement);
}

//Creating elements for statusInProgressArray
for (let i = 0; i < statusInProgressArray.length; i++) {
  const createdElement = document.createElement("div");
  createdElement.innerHTML = `<div class="todo">
                                  <h1>${statusInProgressArray[i].title}</h1>
                                  <p>${statusInProgressArray[i].discription}</p>
                                  <p>${statusInProgressArray[i].status}</p>
                              </div>`;
  boxElement.appendChild(createdElement);
}
