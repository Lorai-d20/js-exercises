// BUG: Something is broken

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

async function fetchTodos() {
  const loader = document.querySelector('.loader');
  const content = document.querySelector('.container');

  loader.classList.remove('hidden');
  content.classList.add('hidden');
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
  } finally {
    loader.classList.add('hidden');
    content.classList.remove('hidden');
  }
 }

const poluteTodoList = () => {
  todoList.forEach(todo => {
    const listItem = createToDoListItem(todo);

    const targetList = todo.completed ? document.querySelector('#done-list') : document.querySelector('#todo-list');
    targetList.prepend(listItem);
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

  todoList.push(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const createToDoListItem = todo => {
  const listItem = document.createElement('li');
  listItem.dataset.id = todo.id;

  const listInput = document.createElement('input');
  listInput.value = todo.title;
  listItem.append(listInput);

  const crudButton = ['Save', 'Toggle', 'Delete'].forEach(button => {
    const buttonEl = document.createElement('button');
    buttonEl.append(button);
    buttonEl.classList.add(button.toLowerCase());
    buttonEl.dataset.button = button.toLocaleLowerCase();
    buttonEl.addEventListener('click', () => handleButtonClick(button, listItem));
    return buttonEl;
  });
  
  listInput.addEventListener('input', () => listInput.nextSibling.classList.remove('save'));
  listItem.append(...crudButton);

  return listItem;
};

const handleButtonClick = (button, listEl) => {
  if (button === 'Save') {
    handleEdit(listEl);
  }
  if (button === 'Delete') {
    handleDelete(listEl);
  }
  if (button === 'Toggle') {
    handleToggle(listEl);
  }
};

const handleEdit = listEl => {
  const todo = todoList.find(todo => todo.id === Number(listEl.dataset.id));
  todo.title = listEl.querySelector('input').value;
  listEl.querySelector('button[data-button="save"]').classList.add('save');
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

const handleDelete = listEl => {
  const todos = todoList.filter(todo => todo.id !== Number(listEl.dataset.id));
  todoList.splice(todoList.findIndex(todo => todo.id === Number(listEl.dataset.id)), 1);
  localStorage.setItem('todoList', JSON.stringify(todos));
  listEl.remove();
}

const handleToggle = listEl => {
  const todo = todoList.find(todo => todo.id === Number(listEl.dataset.id));
  todo.completed = !todo.completed;
  localStorage.setItem('todoList', JSON.stringify(todoList));
  
  const targetList = todo.completed ? document.querySelector('#done-list') : document.querySelector('#todo-list');
  targetList.prepend(listEl);
}

form.addEventListener('submit', handleForm);

const initializeApp = async () => {
  if (todoList.length === 0) {
    await fetchTodos();
  }
  poluteTodoList();
};

initializeApp();