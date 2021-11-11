// eslint-disable-next-line import/extensions
let lists = await import('./listsArray.js');
lists = lists.listsArray;

function fillLocalStorage(_lists) {
  return localStorage.setItem(_lists, JSON.stringify(_lists));
}

if (localStorage.length === 0) {
  fillLocalStorage(lists);
}

function insertListsFromLocalStorage(_lists) {
  const refreshedLists = JSON.parse(localStorage.getItem(_lists));
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
          <div>
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

lists = insertListsFromLocalStorage(lists);

function changeAddCardBtnState(_lists) {
  const refreshedLists = JSON.parse(localStorage.getItem(_lists));

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

lists = changeAddCardBtnState(lists);

function findListIndex(_lists, _listName) {
  const refreshedLists = JSON.parse(localStorage.getItem(_lists));

  for (let i = 0; i < refreshedLists.length; i += 1) {
    if (refreshedLists[i].title === _listName) {
      return i;
    }
  }

  return null;
}

const backlogIndex = findListIndex(lists, 'Backlog');
const backlogAddCardBtn = document.getElementsByClassName('addCard')[backlogIndex];

backlogAddCardBtn.addEventListener('click', () => {
  const listTasks = document.getElementsByClassName('listTasks')[backlogIndex];
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

    const newTaskID = `BacklogTask${lists[backlogIndex].tasks.length}`;

    lists[backlogIndex].tasks.push({ id: newTaskID, name: inputTaskNameValue });

    fillLocalStorage(lists);

    const newTask = document.createElement('li');

    newTask.className = 'task';
    newTask.innerText = inputTaskNameValue;

    inputTaskName.replaceWith(newTask);

    lists = changeAddCardBtnState(lists);
  });

  inputTaskName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      inputTaskName.blur();
    }
  });
});

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

function addTaskToListByNameAndRemoveFromPreviousList(_newTaskNameValue, _listName, listIndexParam,
  _lists, _previousListTasks, previousListIndexParam) {
  const newTaskName = _newTaskNameValue.value;
  const listName = _listName;
  const newTaskID = `${listName}${_lists[listIndexParam].tasks.length}`;

  _lists[listIndexParam].tasks.push({ id: newTaskID, name: newTaskName });

  const newTask = document.createElement('li');

  newTask.className = 'task';
  newTask.innerText = newTaskName;

  _newTaskNameValue.replaceWith(newTask);

  for (let i = 0; i < _previousListTasks.length; i += 1) {
    if (_lists[previousListIndexParam].tasks[i].name === newTaskName) {
      _lists[previousListIndexParam].tasks.splice(i, 1);

      _previousListTasks[i].remove();

      fillLocalStorage(_lists);

      return changeAddCardBtnState(_lists);
    }
  }

  return _lists;
}

const readyIndex = findListIndex(lists, 'Ready');
const readyAddCardBtn = document.getElementsByClassName('addCard')[readyIndex];

readyAddCardBtn.addEventListener('click', () => {
  const obj = createAndAppendDropdownTasks(readyIndex, backlogIndex);
  const dropdownTasks = obj.dropdownTasks;
  const previousListTasks = obj.previousListTasks;

  dropdownTasks.addEventListener('change', () => {
    lists = addTaskToListByNameAndRemoveFromPreviousList(dropdownTasks, 'ReadyTask', readyIndex, lists, previousListTasks, backlogIndex);
  });
});

const progressIndex = findListIndex(lists, 'In Progress');
const progressAddCardBtn = document.getElementsByClassName('addCard')[progressIndex];

progressAddCardBtn.addEventListener('click', () => {
  const obj = createAndAppendDropdownTasks(progressIndex, readyIndex);
  const dropdownTasks = obj.dropdownTasks;
  const previousListTasks = obj.previousListTasks;

  dropdownTasks.addEventListener('change', () => {
    lists = addTaskToListByNameAndRemoveFromPreviousList(dropdownTasks, 'ProgressTask',
      progressIndex, lists, previousListTasks, readyIndex);
  });
});

const finishedIndex = findListIndex(lists, 'Finished');
const finishedAddCardBtn = document.getElementsByClassName('addCard')[finishedIndex];

finishedAddCardBtn.addEventListener('click', () => {
  const obj = createAndAppendDropdownTasks(finishedIndex, progressIndex);
  const dropdownTasks = obj.dropdownTasks;
  const previousListTasks = obj.previousListTasks;

  dropdownTasks.addEventListener('change', () => {
    lists = addTaskToListByNameAndRemoveFromPreviousList(dropdownTasks, 'FinishedTask',
      finishedIndex, lists, previousListTasks, progressIndex);
  });
});
