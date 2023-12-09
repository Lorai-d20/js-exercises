// const todoList = [];
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

async function fetchTodos() {
  try {
     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
     
     if (!response.ok) {
       throw new Error(`HTTP error: ${response.status}`);
     }
     
     const todos = await response.json();
     todoList.push(...todos);
     localStorage.setItem('todoList', JSON.stringify(todoList));
  } catch (error) {
     console.error('Error fetching todos:', error);
  }
 }

const poluteTodoList = () => {
  const todoListEl = document.querySelector('#todo-list');
  const doneListEl = document.querySelector('#done-list');

  todoList.forEach(todo => {
    const listItem = createToDoListItem(todo);

    todo.completed ? doneListEl.appendChild(listItem) : todoListEl.appendChild(listItem);
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
  // this id generation is not safe for production
  const newTodo = { completed: false, title: todo, id: Math.floor(Math.random() * 1000000) };

  const listItem = createToDoListItem(newTodo);

  todoListEl.prepend(listItem);

  todoList.unshift(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const createToDoListItem = todo => {
  const buttons = ['Save', 'Toggle', 'Delete'];

  const crudButton = buttons.map(button => {
    const buttonEl = document.createElement('button');
    buttonEl.append(button);
    buttonEl.classList.add('button');
    buttonEl.addEventListener('click', () => handleButtonClick(button, buttonEl));
    return buttonEl;
  });

  const listItem = document.createElement('li');
  listItem.dataset.id = todo.id;
  const listInput = document.createElement('input');
  listInput.value = todo.title;
  listItem.append(listInput);
  listItem.append(...crudButton);

  return listItem;
};

const handleButtonClick = (button, buttonEl) => {
  if (button === 'Save') {
    handleEdit(buttonEl.parentElement);
  }
  if (button === 'Delete') {
    handleDelete(buttonEl.parentElement);
  }
  if (button === 'Toggle') {
    handleToggle(buttonEl.parentElement);
  }
};

const handleEdit = listEl => {
  const todo = todoList.find(todo => todo.id === Number(listEl.dataset.id));
  todo.title = listEl.querySelector('input').value;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

const handleDelete = listEl => {
  const todos = todoList.filter(todo => todo.id !== Number(listEl.dataset.id));
  localStorage.setItem('todoList', JSON.stringify(todos));
  listEl.remove();
}

const handleToggle = listEl => {
  const todo = todoList.find(todo => todo.id === Number(listEl.dataset.id));
  todo.completed = !todo.completed;
  localStorage.setItem('todoList', JSON.stringify(todoList));

  const doneListEl = document.querySelector('#done-list');
  const todoListEl = document.querySelector('#todo-list');
  todo.completed ? doneListEl.prepend(listEl) : todoListEl.prepend(listEl);
}


form.addEventListener('submit', handleForm);

const initializeApp = async () => {
  if (todoList.length === 0) {
    await fetchTodos();
  }
  poluteTodoList();
};

initializeApp();