const container = document.getElementById('buttonContainer');
const tasks = document.getElementById('theTasks');
const createTask = document.querySelector('.task-prompt');

const localFileStorage = 'task.lists';
let lists = JSON.parse(localStorage.getItem(localFileStorage));

tasks.onsubmit = function (event) {
  event.preventDefault();

  const newTaskText = createTask.value.trim();

  const newTask = document.createElement('input');
  newTask.setAttribute('type', 'checkbox');
  newTask.setAttribute('id', newTaskText);

  const newTaskLabel = document.createElement('input');
  newTaskLabel.value = newTaskText;

  newTaskLabel.setAttribute('maxlength', 30);

  const newTaskButton = document.createElement('img');
  newTaskButton.src = './SVG Files/close.svg';
  newTaskButton.onclick = function () {
    tasks.removeChild(newTaskContainer);
  };

  const newTaskContainer = document.createElement('div');
  newTaskContainer.appendChild(newTask);
  newTaskContainer.appendChild(newTaskLabel);
  newTaskContainer.appendChild(newTaskButton);
  createTask.value = '';
  tasks.appendChild(newTaskContainer);
};

// function createListItem(text) {
//   const listItem = document.createElement('li');
//   const listItemButton = document.createElement('button');
//   listItemButton.textContent = text;
//   listItemButton.addEventListener('click', handleListItemClick);
//   listItem.appendChild(listItemButton);
//   const taskList = document.createElement('ul'); // Create a sub-list for tasks
//   listItem.appendChild(taskList);
//   return listItem;
// }

// function handleListItemClick(event) {
//   const listItem = event.target.parentNode; // Get the list item
//   const taskInput = prompt('Enter task:');

//   if (taskInput) {
//     const taskButton = createTaskButton(taskInput);
//     listItem.querySelector('ul').appendChild(taskButton); // Add task to sub-list
//   }
// }

// function createTaskButton(text) {
//   const taskButton = document.createElement('button');
//   taskButton.textContent = text;
//   return taskButton;
// }
