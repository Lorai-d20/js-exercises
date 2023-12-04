// Goal: Make sure the todoList items are persistent in localStorage
// When a todo is added, it should be added to localStorage as well so all items are still present when the page is refreshed

// See how the todoList array is updated to now read from localStorage when available otherwise use the default array
const todoList = JSON.parse(localStorage.getItem('todoList')) || [
  { isDone: true, text: 'Do a dance' },
  { isDone: false, text: 'Learn JS' },
  { isDone: false, text: 'Cook dinner' },
];

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
  const todoListEl = document.querySelector('#todo-list');

  const newListItem = document.createElement('li');
  newListItem.append(todo);

  todoListEl.appendChild(newListItem);
};

form.addEventListener('submit', handleForm);
poluteTodoList();