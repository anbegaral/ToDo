var task;
var taskList = [];
//Object Task
var Task = function(title, content){
  this.title = title;
  this.content = content;
}

//function to add a new task to the array
var newTask = function(){
  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;
  if(!title || !content){
    alert('Please fill the fields');
  }else{
    task = new Task(title, content);
    taskList.push(task);
  }
  //resetting the inputs
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  //updating the html
  updateList();
};

//function to update the content of the array
var updateList = function(){
  var divTasks = document.getElementById('tasks');
  //deleting html
  divTasks.innerHTML = "";
  var deleteButtons = document.getElementsByClassName('delete');
  //Adding the content to the html
  for(var i = 0; i < taskList.length; i++){
     divTasks.innerHTML += '<div class="taskitem">' +
     '<p class="taskTitle">' + taskList[i].title + '</p>' +
     '<p class="task">' + taskList[i].content + '</p>' +
     '<p class="delete" id="'+ i +'">DELETE</p>' +
     '</div>';
  }
  //Adding event listener to delete links
  for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteTask);
  }
}

//function to delete the task from the array
var deleteTask = function(){
  if (this.id > -1) {
    taskList.splice(this.id, 1);
  }
  //updating the html
  updateList();
}

//Adding functionality to button
document.getElementById('add').addEventListener('click', newTask);
