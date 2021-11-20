/* eslint-disable import/extensions */
let lists = await import('./listsArray.js');
const fillLocalStorageObj = await import('../utils/lists/fillLocalStorage.js');
const changeAddCardBtnStateObj = await import('../utils/lists/changeAddCardBtnState.js');
// eslint-disable-next-line max-len
const createAndAppendDropdownTasksObj = await import('../utils/lists/createAndAppendDropdownTasks.js');
const listMenuObj = await import('../utils/lists/listMenu.js');

const fillLocalStorage = fillLocalStorageObj.fillLocalStorage;
const changeAddCardBtnState = changeAddCardBtnStateObj.changeAddCardBtnState;
// eslint-disable-next-line max-len
const createAndAppendDropdownTasks = createAndAppendDropdownTasksObj.createAndAppendDropdownTasks;

lists = lists.listsArray;

if (localStorage.length === 0) {
  fillLocalStorage('lists', lists);
}

function insertListsFromLocalStorage(objName) {
  const refreshedLists = JSON.parse(localStorage.getItem(objName));
  const main = document.getElementById('main');

  for (let i = 0; i < refreshedLists.length; i += 1) {
    main.insertAdjacentHTML(
      'beforeend',
      `
        <div class="listWrapper">
          <div class="list">
            <div class="listHeader">
              <div class="listName">${refreshedLists[i].title}</div>
              <div class="listMenu">
                <div>•••</div>
              </div>
            </div>
            <ul class="listTasks"></ul>
            <div class="addCard">
              <button class="addCardButton"><img src="src/assets/images/add-card.png" /> Add card</button>
            </div>
          </div>
        </div>
      `,
    );

    const listTasks = document.getElementsByClassName('listTasks')[i];

    for (let j = 0; j < refreshedLists[i].tasks.length; j += 1) {
      listTasks.insertAdjacentHTML(
        'beforeend',
        `
          <li class="task">${refreshedLists[i].tasks[j].name}</li>
        `,
      );
    }
  }

  return refreshedLists;
}

lists = insertListsFromLocalStorage('lists');

lists = changeAddCardBtnState('lists');

function addTaskToListByNameAndRemoveFromPreviousList(_newTaskNameValue, listIndexParam, _lists,
  _previousListTasks, previousListIndexParam) {
  const newTaskName = _newTaskNameValue.value;
  const newTaskID = `${_lists[listIndexParam].tasks.length}`;

  _lists[listIndexParam].tasks.push({ id: newTaskID, name: newTaskName });

  const newTask = document.createElement('li');

  newTask.className = 'task';
  newTask.innerText = newTaskName;

  _newTaskNameValue.replaceWith(newTask);

  for (let i = 0; i < _previousListTasks.length; i += 1) {
    if (_lists[previousListIndexParam].tasks[i].name === newTaskName) {
      _lists[previousListIndexParam].tasks.splice(i, 1);

      _previousListTasks[i].remove();

      fillLocalStorage('lists', _lists);

      return changeAddCardBtnState('lists');
    }
  }

  return _lists;
}

function addListenersToLists(_lists) {
  const listsBlocks = document.getElementById('main').children;

  listsBlocks[0].getElementsByClassName('addCardButton')[0].addEventListener('click', () => {
    const listTasks = document.getElementsByClassName('listTasks')[0];
    const inputTaskName = document.createElement('input');

    inputTaskName.className = 'task';
    inputTaskName.style.border = 'none';

    listTasks.append(inputTaskName);

    inputTaskName.focus();

    // eslint-disable-next-line consistent-return
    inputTaskName.addEventListener('blur', () => {
      const inputTaskNameValue = inputTaskName.value.trim();

      if (inputTaskNameValue.replace(/\s+/g, '') === '' || inputTaskNameValue === undefined) {
        // eslint-disable-next-line no-alert
        alert('Enter task name!');

        inputTaskName.remove();

        return null;
      }

      const newTaskID = `${_lists[0].tasks.length}`;

      _lists[0].tasks.push({ id: newTaskID, name: inputTaskNameValue });

      fillLocalStorage('lists', _lists);

      const newTask = document.createElement('li');

      newTask.className = 'task';
      newTask.innerText = inputTaskNameValue;

      inputTaskName.replaceWith(newTask);

      changeAddCardBtnState('lists');
    });

    inputTaskName.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        inputTaskName.blur();
      }
    });
  });

  for (let i = 1; i < listsBlocks.length; i += 1) {
    listsBlocks[i].getElementsByClassName('addCardButton')[0].addEventListener('click', () => {
      const obj = createAndAppendDropdownTasks(i, i - 1);
      const dropdownTasks = obj.dropdownTasks;
      const previousListTasks = obj.previousListTasks;

      dropdownTasks.addEventListener('change', () => {
        addTaskToListByNameAndRemoveFromPreviousList(dropdownTasks, i, _lists,
          previousListTasks, i - 1);
      });
    });
  }

  for (let i = 0; i < listsBlocks.length; i += 1) {
    const listMenu = new listMenuObj.ListMenu(listsBlocks[i].getElementsByClassName('listMenu')[0]);

    listsBlocks[i].getElementsByClassName('listMenu')[0].addEventListener('click', () => {
      if (!listMenu.isActiveListMenu) {
        listMenu.generateListMenu();
      } else {
        listMenu.removeListMenu();
      }
    });
  }
}

addListenersToLists(lists);

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

    lists = changeAddCardBtnState('lists');

    addListenersToLists(lists);
  });

  inputNewListName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      inputNewListName.blur();
    }
  });
});
