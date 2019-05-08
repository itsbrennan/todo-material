// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();
// load all event listeners
function loadEventListeners(){
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks
  filter.addEventListener('keyup', filterTasks);

}

// Add task
function addTask(e){
  if (taskInput.value === ""){
    alert("Add a task");
  }
  // create li elenent
  const li = document.createElement('li');
  // add a class
  li.className = 'collection-item'
  // create the text node & append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // create a new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  // append the link to the li
  li.appendChild(link);

  // append the li to the ul
  taskList.appendChild(li);

  //clear the input 
  taskInput.value = '';

  e.preventDefault();
}

// remove task fucntion
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')){
    if (confirm("Are you sure you would like to delete this task?")){
      e.target.parentElement.parentElement.remove();
    }
    
  }
}

// clear tasks
function clearTasks(){
  // taskList.innerHTML = '';
  // faster
  if (confirm("Are you sure you would like to delete these tasks?")){
    while (taskList.firstChild){
      
        taskList.removeChild(taskList.firstChild);
    }
  }
}

// filter tasks
function filterTasks(e){

  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else {
      task.style.display = 'none';
    }
  });

}