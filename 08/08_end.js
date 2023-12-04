document.addEventListener("DOMContentLoaded", function() {
  // Goal: When the user enters a todo item it should be added to todo-list

  // 1. Select the form from the HTML and store it in a variable
  const form = document.forms.demo;
  
  const handleForm = event => {
    // 3. Make sure the form does not reload the page
    event.preventDefault();

    // 4. Select the value from the todo input field and store it in a variable
    const todo = form.elements.todo.value;
  
    // 5. Select the todo-list and store it in a variable
    const todoList = document.querySelector('#todo-list');

    // 6. Create a new list item and store it in a variable
    const newListItem = document.createElement('li');

    // 7. Add the todo value to the new list item
    newListItem.append(todo);

    // 8. Append the new list item to the todo-list
    todoList.appendChild(newListItem);
  
    // 9. Reset the form
    form.reset();
  };
  
  // 2. add an event listener to the form and pass the handleForm function as a callback
  form.addEventListener('submit', handleForm);
});
