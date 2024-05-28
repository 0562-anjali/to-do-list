document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });
  
    function addTask(task) {
      if (task.trim() === '') {
        alert('Task cannot be empty');
        return;
      }
  
      const taskItem = document.createElement('li');
      taskItem.classList.add('task');
  
      const taskText = document.createElement('span');
      taskText.textContent = task;
      taskItem.appendChild(taskText);
  
      const completeButton = document.createElement('button');
      completeButton.textContent = '✓';
      completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
      taskItem.appendChild(completeButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '✗';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
    }
  });
  