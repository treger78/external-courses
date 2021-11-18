/* eslint-disable import/extensions */
// let lists = await import('./listsArray.js');
// const fillLocalStorageObj = await import('../utils/lists/fillLocalStorage.js');
// const changeAddCardBtnStateObj = await import('../utils/lists/changeAddCardBtnState.js');
// eslint-disable-next-line max-len
// const createAndAppendDropdownTasksObj = await import('../utils/lists/createAndAppendDropdownTasks.js');

// const fillLocalStorage = fillLocalStorageObj.fillLocalStorage;
// const changeAddCardBtnState = changeAddCardBtnStateObj.changeAddCardBtnState;
// eslint-disable-next-line max-len
// const createAndAppendDropdownTasks = createAndAppendDropdownTasksObj.createAndAppendDropdownTasks;

// lists = lists.listsArray;

let lists = [
  {
    title: 'Backlog', // заголовок блока
    tasks: [ // массив задач
      {
        id: '0',
        name: 'Sprint bugfix',
      },
    ],
  },

  {
    title: 'Ready',
    tasks: [
      {
        id: '0',
        name: 'Shop bug1',
      },
      {
        id: '1',
        name: 'Shop bug2',
      },
      {
        id: '2',
        name: 'Shop bug3',
      },
    ],
  },

  {
    title: 'In Progress',
    tasks: [
      {
        id: '0',
        name: 'Auth bugfix',
      },
    ],
  },

  {
    title: 'Finished',
    tasks: [
      {
        id: '0',
        name: 'Main page bugfix',
      },
    ],
  },
];

function fillLocalStorage(objName, _lists) {
  return localStorage.setItem(objName, JSON.stringify(_lists));
}

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
              <div class="listMenu">•••</div>
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

function changeAddCardBtnState(objName) {
  const refreshedLists = JSON.parse(localStorage.getItem(objName));

  for (let i = 0; i < refreshedLists.length; i += 1) {
    const addCardButton = document.getElementsByClassName('addCardButton')[i + 1];

    if (refreshedLists[i].tasks.length < 1) {
      addCardButton.setAttribute('disabled', 'disabled');
    } else if (addCardButton !== undefined) {
      addCardButton.removeAttribute('disabled');
    }
  }

  return refreshedLists;
}

lists = changeAddCardBtnState('lists');

function createAndAppendDropdownTasks(targetListIndexParam, previousListIndexParam) {
  const listTasks = document.getElementsByClassName('listTasks')[targetListIndexParam];
  const dropdownTasks = document.createElement('select');

  dropdownTasks.className = 'task';
  dropdownTasks.style.border = 'none';
  dropdownTasks.style.width = '16rem';
  dropdownTasks.style.fontSize = '18px';
  dropdownTasks.style.padding = '0.5rem';

  dropdownTasks.insertAdjacentHTML(
    'beforeend',
    `
      <option disabled selected>Select task</option>
    `,
  );

  const previousList = document.getElementsByClassName('listTasks')[previousListIndexParam];
  const previousListTasks = previousList.children;

  for (let i = 0; i < previousListTasks.length; i += 1) {
    dropdownTasks.insertAdjacentHTML(
      'beforeend',
      `
        <option>${previousListTasks[i].textContent}</option>
      `,
    );
  }

  listTasks.append(dropdownTasks);

  return { dropdownTasks, previousListTasks };
}

function addTaskToListByNameAndRemoveFromPreviousList(_newTaskNameValue, listIndexParam, _lists,
  _previousListTasks, previousListIndexParam) {
  const newTaskName = _newTaskNameValue.value;
  const newTaskID = `${_lists[listIndexParam].tasks.length}`;

  /*
  console.log('_lists');
  console.log(_lists);
  */
  _lists[listIndexParam].tasks.push({ id: newTaskID, name: newTaskName });

  /*
  console.log('_lists[listIndexParam].tasks');
  console.log(_lists[listIndexParam].tasks);

  console.log('_lists');
  console.log(_lists);
  */

  const newTask = document.createElement('li');

  newTask.className = 'task';
  newTask.innerText = newTaskName;

  _newTaskNameValue.replaceWith(newTask);

  console.log('_previousListTasks.length');
  console.log(_previousListTasks.length);
  for (let i = 0; i < _previousListTasks.length; i += 1) {
    console.log('_lists[previousListIndexParam].tasks');
    console.log(_lists[previousListIndexParam].tasks);
    if (_lists[previousListIndexParam].tasks[i].name === newTaskName) {
      _lists[previousListIndexParam].tasks.splice(i, 1);

      _previousListTasks[i].remove();

      fillLocalStorage('lists', _lists);

      return changeAddCardBtnState('lists');
    }
  }
  console.log('_previousListTasks.length');
  console.log(_previousListTasks.length);
  console.log('_lists[previousListIndexParam].tasks');
  console.log(_lists[previousListIndexParam].tasks);

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

      console.log('_lists');
      console.log(_lists);
      _lists[0].tasks.push({ id: newTaskID, name: inputTaskNameValue });
      console.log('lists[0].tasks');
      console.log(_lists[0].tasks);

      console.log('_lists');
      console.log(_lists);

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
          <div class="listMenu">•••</div>
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

    lists = changeAddCardBtnState('lists');

    addListenersToLists(lists);

    // location.reload();
  });

  inputNewListName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      inputNewListName.blur();
    }
  });
});
