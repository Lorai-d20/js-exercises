document.addEventListener("DOMContentLoaded", function() {
  // If the user clicks the done-button I want the item to move to the done-list

  // 1. Select the done-buttons and store them in a variable
  const buttons = document.querySelectorAll('.done-button');

  const moveItemToDoneList = event => {
    // 4. Select the item that should be moved to the done-list
    const item = event.target.parentElement;

    // 5. Select the done-list
    const doneList = document.querySelector('#done-list');

    // 6. Prepend the item to the done-list
    doneList.prepend(item);
  };

  // 2. Add an event listeners to all done-buttons (loop)
  /** The second argument of the event listener should be the moveItemToDoneList function */
  for(const button of buttons) {
    button.addEventListener('click', moveItemToDoneList);
  };
});
