document.addEventListener("DOMContentLoaded", function() {
  // Goal: finish the functions to add todo items to the todo-list and move them to the done-list
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
    // Write pseudo code first
    // Bonus: remove the button from the todo item
  };

  const addTodoToList = todo => {
    // 1. Can you create this function?
    // The todo item should to be added to the todo-list
    // The todo text should be inside a list item
    // The list item should have a button with the text 'Mark as done'
    // The button should have an event listener that calls the moveToDoneList function
  };

  form.addEventListener('submit', handleForm);
});
