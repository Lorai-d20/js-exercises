// Goal: When we click the submit button without typing anything in the input field, an empty list item is added.
// We don't want that. Can you make sure that only non-empty items are added to the list?
// Please share your solution before coding

document.addEventListener("DOMContentLoaded", function() {
  const form = document.forms.demo;
  
  const handleForm = event => {
    event.preventDefault();

    const todo = form.elements.todo.value;
    if (!todo) return;

    addTodoToList(todo);
  
    form.reset();
  };

  const addTodoToList = todo => {
    const todoList = document.querySelector('#todo-list');

    const newListItem = document.createElement('li');
    newListItem.append(todo);

    todoList.appendChild(newListItem);
  };

  form.addEventListener('submit', handleForm);
});
