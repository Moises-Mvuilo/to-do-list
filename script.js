const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const completeList = document.querySelector(".list-tasks");
const validation = document.getElementById("validation");

let myItemList = [];

function addNewTaskt() {
  myItemList.push({
    task: input.value,
    finish: false,
  });

  if (input.value === "") {
    validation.innerHTML = "Por favor, insira uma tarefa!";
    validation.style.color = "red";
    validation.style.fontSize = ".8rem";
    myItemList.pop();
    return;
  } else {
    validation.innerHTML = "";
  }

  input.value = "";

  showTasks();
}

function showTasks() {
  let newLi = "";

  myItemList.forEach((item, position) => {
    newLi =
      newLi +
      `
     <li class="task ${item.finish && "done"}">
            <img src="img/checked.png" alt="check-na-tarefa" onclick ="taskFinish(${position})">
            <p>${item.task}</p>
            <img src="img/trash.png" alt="tarefa-para-lixo" onclick="deleteItem(${position})">
          </li>
    `;
  });

  completeList.innerHTML = newLi;
  localStorage.setItem("list", JSON.stringify(myItemList));
}

function taskFinish(position) {
  myItemList[position].finish = !myItemList[position].finish;
  showTasks();
}

function deleteItem(position) {
  myItemList.splice(position, 1);
  showTasks();
}

//local storage
function loadingTasks() {
  const localStorageOfTasks = localStorage.getItem("list");
  myItemList = JSON.parse(localStorageOfTasks);

  showTasks();
}
loadingTasks();

button.addEventListener("click", addNewTaskt);
