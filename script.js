const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const completeList = document.querySelector(".list-tasks");
const validation = document.getElementById("validation");

let myItemList = [];

function addNewTask() {
  if (input.value.trim() === "") {
    validation.innerHTML = "Por favor, insira uma tarefa!";
    validation.style.color = "red";
    validation.style.fontSize = ".8rem";
    return;
  }

  validation.innerHTML = "";

  myItemList.push({
    task: input.value,
    finish: false,
  });

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
}

function taskFinish(position) {
  myItemList[position].finish = !myItemList[position].finish;
  showTasks();
}

function deleteItem(position) {
  myItemList.splice(position, 1);
  showTasks();
}

button.addEventListener("click", addNewTask);
