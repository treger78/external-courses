const lists = [
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

const lastListsLength = lists.length;
const main = document.getElementById('main');

function initPrimaryLists(_lastListsLength, _main, _lists) {
  for (let i = 0; i < _lastListsLength; i += 1) {
    _main.insertAdjacentHTML(
      'beforeend',
      `
        <div class="list">
          <div class="listHeader">
            <div class="listName">${_lists[i].title}</div>
            <div class="listMenu">•••</div>
          </div>
          <div class="listTasks"></div>
          <div class="addCard">
            <button class="addCardButton"><img src="public/assets/images/add-card.png" /> Add card</button>
          </div>
        </div>
      `,
    );

    const listTasks = document.getElementsByClassName('listTasks')[i];

    for (let j = 0; j < _lists[i].tasks.length; j += 1) {
      listTasks.insertAdjacentHTML(
        'beforeend',
        `
          <div class="task">${_lists[i].tasks[j].name}</div>
        `,
      );
    }
  }
}

initPrimaryLists(lastListsLength, main, lists);

function disableAddCardBtn(_lastListsLength, _lists) {
  for (let i = 0; i < _lastListsLength; i += 1) {
    if (_lists[i].tasks.length < 1) {
      const addCardButton = document.getElementsByClassName('addCardButton')[i + 1];
      addCardButton.setAttribute('disabled', 'disabled');
    }
  }
}

disableAddCardBtn(lastListsLength, lists);

let backlogIndex = 0;

function findBacklogIndex(_lists) {
  for (let i = 0; i < _lists.length; i += 1) {
    if (_lists[i].title === 'Backlog') {
      return i;
    }
  }
  return 0;
}

backlogIndex = findBacklogIndex(lists);

function insertBacklogTasksFromStorage(backlogIndexParam, _lists) {
  const listTasksItemPosition = 1;
  const listTasks = main.children[backlogIndexParam].children[listTasksItemPosition];

  for (let i = 0; i < localStorage.length; i += 1) {
    listTasks.insertAdjacentHTML(
      'beforeend',
      `
        <div class="task">${localStorage.getItem(`BacklogTask${_lists[backlogIndexParam].tasks.length + i}`)}</div>
      `,
    );
  }
}

insertBacklogTasksFromStorage(backlogIndex, lists);

const backlogAddCardBtn = document.getElementsByClassName('addCard')[backlogIndex];

backlogAddCardBtn.addEventListener('click', () => {
  const listTasks = document.getElementsByClassName('listTasks')[backlogIndex];
  const inputTaskName = document.createElement('input');

  inputTaskName.className = 'task';

  listTasks.append(inputTaskName);

  inputTaskName.focus();

  inputTaskName.addEventListener('blur', () => {
    const inputTaskNameValue = inputTaskName.value.trim();

    if (inputTaskNameValue.replace(/\s+/g, '') === '' || inputTaskNameValue === undefined) {
      alert('Enter task name!');

      inputTaskName.remove();
    }

    const backlogTasksLength = lists[backlogIndex].tasks.length;

    localStorage.setItem(`BacklogTask${backlogTasksLength + localStorage.length}`, `${inputTaskNameValue}`);

    const newTask = document.createElement('div');

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
