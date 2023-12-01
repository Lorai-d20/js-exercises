document.addEventListener("DOMContentLoaded", function() {
  const todoList = [
    { isDone: true, text: 'Do a dance' },
    { isDone: false, text: 'Learn JS' },
    { isDone: false, text: 'Cook dinner' },
  ];

  // oefening om lijst op te delen in dones en todos en deze te tonen in juiste lijst
  // const doneList = todoList.filter(todo => todo.isDone);
  // const todoList = todoList.filter(todo => !todo.isDone);
  // submit voegt item to aan todoList
  // is niet reactive dus hoe zorg je ervoor dat wanneer todoList update de lijst ook update?
});
