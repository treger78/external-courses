let lists = [
  {
    title: 'Backlog', // заголовок блока
    tasks: [ // массив задач
      {
        id: 'BacklogTask0',
        name: 'Sprint bugfix',
      },
    ],
  },

  {
    title: 'Ready',
    tasks: [
      {
        id: 'ReadyTask0',
        name: 'Shop bug1',
      },
      {
        id: 'ReadyTask1',
        name: 'Shop bug2',
      },
      {
        id: 'ReadyTask2',
        name: 'Shop bug3',
      },
    ],
  },

  {
    title: 'In Progress',
    tasks: [
      {
        id: 'ProgressTask0',
        name: 'Auth bugfix',
      },
    ],
  },

  {
    title: 'Finished',
    tasks: [
      {
        id: 'FinishedTask0',
        name: 'Main page bugfix',
      },
    ],
  },
];

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
              <button class="addCardButton"><img src="public/assets/images/add-card.png" /> Add card</button>
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

function disableAddCardBtn(_lists) {
  const refreshedLists = JSON.parse(localStorage.getItem(_lists));

  for (let i = 0; i < refreshedLists.length; i += 1) {
    if (refreshedLists[i].tasks.length < 1) {
      const addCardButton = document.getElementsByClassName('addCardButton')[i + 1];
      addCardButton.setAttribute('disabled', 'disabled');
    }
  }

  return refreshedLists;
}

lists = disableAddCardBtn(lists);

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
  });

  inputTaskName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      inputTaskName.blur();
    }
  });
});

const readyIndex = findListIndex(lists, 'Ready');
const readyAddCardBtn = document.getElementsByClassName('addCard')[readyIndex];

readyAddCardBtn.addEventListener('click', () => {
  const listTasks = document.getElementsByClassName('listTasks')[readyIndex];
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

  const previousList = document.getElementsByClassName('listTasks')[backlogIndex];
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

  dropdownTasks.addEventListener('change', () => {
    const newTaskName = dropdownTasks.value;
    const listName = 'ReadyTask';
    const newTaskID = `${listName}${lists[readyIndex].tasks.length}`;

    lists[readyIndex].tasks.push({ id: newTaskID, name: newTaskName });

    const newTask = document.createElement('li');

    newTask.className = 'task';
    newTask.innerText = newTaskName;

    dropdownTasks.replaceWith(newTask);

    for (let i = 0; i < previousListTasks.length; i += 1) {
      if (lists[backlogIndex].tasks[i].name === newTaskName) {
        lists[backlogIndex].tasks.splice(i, 1);

        previousListTasks[i].remove();

        fillLocalStorage(lists);

        break;
      }
    }
  });
});

/*
const progressIndex = findListIndex(lists, 'In Progress');
const progressAddCardBtn = document.getElementsByClassName('addCard')[progressIndex];

progressAddCardBtn.addEventListener('click', () => {

});

const finishedIndex = findListIndex(lists, 'Finished');
const finishedAddCardBtn = document.getElementsByClassName('addCard')[finishedIndex];

finishedAddCardBtn.addEventListener('click', () => {

});
*/
