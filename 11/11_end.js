document.addEventListener("DOMContentLoaded", function() {
  const form = document.forms.demo;
  
  const handleForm = event => {
    event.preventDefault();

    const todo = form.elements.todo.value;
    if (!todo) return;

    addTodoToList(todo);
  
    form.reset();
  };

  const moveToDoneList = event => {
    // 2. Can you create this function?
    // The todo item should be moved from the todo-list to the done-list
    // Bonus: remove the button from the todo item
    const todoItem = event.target.parentElement;
    const doneList = document.querySelector('#done-list');
    todoItem.querySelector('button').remove();
    doneList.append(todoItem);
  };

  const addTodoToList = todo => {
    // 1. Can you create this function?
    // The todo item should to be added to the todo-list
    // The todo text should be inside a list item
    // The list item should have a button with the text 'Mark as done'
    // The button should have an event listener that calls the moveToDoneList function
    const todoList = document.querySelector('#todo-list');

    const newListItem = document.createElement('li');
    const newListButton = document.createElement('button');
    newListButton.innerText = 'Mark as done';

    newListButton.addEventListener('click', moveToDoneList);

    newListItem.append(newListButton);
    newListItem.append(todo);

    todoList.appendChild(newListItem);
  };

  form.addEventListener('submit', handleForm);
});
