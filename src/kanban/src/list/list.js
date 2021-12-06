/* eslint-disable import/extensions */
import tasksCounter from '../footer/tasksCounter.js';
import { listsArray as lists } from './utils/listsArray.js';
import fillLocalStorage from './utils/fillLocalStorage.js';
import changeAddCardBtnState from './utils/changeAddCardBtnState.js';
import insertListsFromLocalStorage from './utils/insertListsFromLocalStorage.js';
import addListenersToLists from './utils/addListenersToLists.js';

if (localStorage.length === 0) {
  fillLocalStorage('lists', lists);
  tasksCounter();
}

if (JSON.parse(localStorage.getItem('lists')).length) {
  // lists = insertListsFromLocalStorage('lists');
  // lists = changeAddCardBtnState('lists');
  insertListsFromLocalStorage('lists');
  changeAddCardBtnState('lists');
  addListenersToLists(lists);
} else {
  document.getElementById('main').innerHTML = '<div id="mainIsEmpty">You do not have active task lists, add new ones using the button "Create new list"!</div>';
  // lists = [];
  lists.length = 0;
}

const createNewListButton = document.getElementById('createNewListButton');

createNewListButton.addEventListener('click', () => {
  const main = document.getElementById('main');

  main.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="listWrapper">
      <div class="list">
        <div class="listHeader">
          <input type="text" class="listName"></input>
          <div class="listMenu">
            <div>•••</div>
          </div>
        </div>
      </div>
    </div>
    `,
  );

  const inputNewListName = document.getElementsByClassName('listName')[0];

  inputNewListName.style.margin = '0.5rem';
  inputNewListName.focus();

  // eslint-disable-next-line consistent-return
  inputNewListName.addEventListener('blur', () => {
    const newListNameValue = inputNewListName.value.trim();

    if (newListNameValue.replace(/\s+/g, '') === '' || newListNameValue === undefined) {
      // eslint-disable-next-line no-alert
      alert('Enter list name!');

      document.getElementsByClassName('listWrapper')[0].remove();

      return null;
    }

    const newListName = document.createElement('div');

    newListName.className = 'listName';
    newListName.innerText = newListNameValue;

    inputNewListName.replaceWith(newListName);

    const newListHeader = document.getElementsByClassName('listHeader')[0];

    newListHeader.insertAdjacentHTML(
      'afterend',
      `
        <ul class="listTasks"></ul>
        <div class="addCard">
          <button class="addCardButton"><img src="src/assets/images/add-card.png" /> Add card</button>
        </div>
      `,
    );

    lists.unshift({
      title: newListNameValue,
      tasks: [],
    });

    fillLocalStorage('lists', lists);

    main.textContent = '';

    insertListsFromLocalStorage('lists');

    // lists = changeAddCardBtnState('lists');
    changeAddCardBtnState('lists');

    addListenersToLists(lists);
  });

  inputNewListName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      inputNewListName.blur();
    }
  });
});
