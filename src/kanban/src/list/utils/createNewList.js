/* eslint-disable import/extensions */
import fillLocalStorage from './fillLocalStorage.js';
import insertListsFromLocalStorage from './insertListsFromLocalStorage.js';
import changeAddCardBtnState from './changeAddCardBtnState.js';
import addListenersToLists from './addListenersToLists.js';

export default function createNewList(_lists) {
  document.getElementById('createNewListButton').addEventListener('click', () => {
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

      _lists.unshift({
        title: newListNameValue,
        tasks: [],
      });

      fillLocalStorage('lists', _lists);

      main.textContent = '';

      insertListsFromLocalStorage('lists');

      changeAddCardBtnState('lists');

      addListenersToLists(_lists);
    });

    inputNewListName.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        inputNewListName.blur();
      }
    });
  });
}
