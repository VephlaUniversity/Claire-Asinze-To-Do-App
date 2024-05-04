document
  .getElementById("task-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("due-date");

    const taskText = taskInput.value.trim();
    const dueDateText = dueDateInput.value;

    if (taskText === "") {
      return;
    }

    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = `${taskText} - Due: ${dueDateText}`;

    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = '<i class="fas fa-check"></i>';
    toggleButton.addEventListener("click", function () {
      listItem.classList.toggle("completed");
      if (listItem.classList.contains("completed")) {
        toggleButton.innerHTML = '<i class="fas fa-times"></i>'; // Switch to crossmark
        taskSpan.style.textDecoration = "line-through"; // Cross out the list text
      } else {
        toggleButton.innerHTML = '<i class="fas fa-check"></i>'; // Switch back to checkmark
        taskSpan.style.textDecoration = "none"; // Remove crossing out
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    taskButtons.appendChild(toggleButton);
    taskButtons.appendChild(deleteButton);

    taskInfo.appendChild(taskSpan);
    taskInfo.appendChild(taskButtons);

    listItem.appendChild(taskInfo);

    taskList.appendChild(listItem);

    taskInput.value = "";
    dueDateInput.value = "";
  });
