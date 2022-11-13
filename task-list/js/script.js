// define ui element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter')
let taskInput = document.querySelector('#new_task');

//define event listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('submit', removeTask);


//add function
function addTask(e) {
    if (taskInput.value === '') {
        alert('Please enter a task');
    } else {
        e.preventDefault();
        //create li elemt
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }

}

//remove function
function removeTask(e) {

}