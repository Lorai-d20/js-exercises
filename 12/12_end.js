const todoList = [
  { isDone: true, text: 'Do a dance' },
  { isDone: false, text: 'Learn JS' },
  { isDone: false, text: 'Cook dinner' },
];

// Goal: add the default todoList given in the array above to the todo-list and done-list

// 1. Create a function that adds the items in the todoList variable to the #todo-list element in the DOM when isDone is false 
// isDone is true the item should be added to the #done-list element in the DOM
const poluteTodoList = () => {
  const todoListEl = document.querySelector('#todo-list');
  const doneListEl = document.querySelector('#done-list');

  todoList.forEach(todo => {
    const newListItem = document.createElement('li');
    newListItem.append(todo.text);

    todo.isDone ? doneListEl.appendChild(newListItem) : todoListEl.appendChild(newListItem);
  });
};

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
// 2. Call the function
poluteTodoList();
