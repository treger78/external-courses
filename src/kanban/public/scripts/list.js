const lists = [
  {
    title: 'Backlog', // заголовок блока
    tasks: [ // массив задач
      {
        id: 'task1',
        name: 'Sprint bugfix',
      },
    ],
  },

  {
    title: 'Ready',
    tasks: [
      {
        id: 'task1',
        name: 'Shop bug1',
      },
      {
        id: 'task2',
        name: 'Shop bug2',
      },
      {
        id: 'task2',
        name: 'Shop bug3',
      },
    ],
  },

  {
    title: 'In Progress',
    tasks: [
      {
        id: 'task1',
        name: 'Auth bugfix',
      },
    ],
  },

  {
    title: 'Finished',
    tasks: [
      {
        id: 'task1',
        name: 'Main page bugfix',
      },
    ],
  },
];

const lastListsLength = lists.length;
const main = document.getElementById('main');

for (let i = 0; i < lastListsLength; i += 1) {
  main.insertAdjacentHTML(
    'beforeend',
    `
      <div class="list">
        <div class="listHeader">
          <div class="listName">${lists[i].title}</div>
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

  for (let j = 0; j < lists[i].tasks.length; j += 1) {
    listTasks.insertAdjacentHTML(
      'beforeend',
      `
        <div class="task">${lists[i].tasks[j].name}</div>
      `,
    );
  }
}

for (let i = 0; i < lastListsLength; i += 1) {
  if (lists[i].tasks.length < 1) {
    const addCardButton = document.getElementsByClassName('addCardButton')[i + 1];
    addCardButton.setAttribute('disabled', 'disabled');
  }
}

let backlogIndex = 0;

for (let i = 0; i < lists.length; i += 1) {
  if (lists[i].title === 'Backlog') {
    backlogIndex = i;
  }
}

const backlogAddCardBtn = document.getElementsByClassName('addCard')[backlogIndex];

backlogAddCardBtn.addEventListener('click', () => {
  const listTasks = document.getElementsByClassName('listTasks')[backlogIndex];
  const newTaskName = document.createElement('input');

  newTaskName.className = 'task';

  listTasks.append(newTaskName);

  newTaskName.focus();
});

/*
function insertList(listName, listTasks) {
  main.insertAdjacentHTML(
    'beforeend',
    `
      <div class="list">
        <div class="listHeader">
          <div class="listName">${listName}</div>
          <div class="listMenu">•••</div>
        </div>
        <div class="listTasks">
          <div class="task">${listTasks}</div>
        </div>
        <div class="addCard">
          <button><img src="public/assets/images/add-card.png" /> Add card</button>
        </div>
      </div>
    `,
  );
}

insertList(lists[0].title, lists[0].tasks[0].name);

const addCardButtons = document.getElementsByClassName('addCard');

addCardButtons.forEach((btn) => {
  btn.addEventListener('click', () => {

  });
});
*/

/*

function mutationCallback(lastListsLength) {
  if (lastListsLength !== lists.length) {

  }
}

const observer = new MutationObserver(callback);
*/

/*
const createNewListItem = document.getElementById('createNewListItem');

createNewListItem.addEventListener('click', () => {
  lists.unshift(
    {
      title: '',
      tasks: [
        {
          id: '',
          name: '',
        },
      ],
    },
  );

  const main = document.getElementById('main');

  main.insertAdjacentHTML(
    'beforeend',
    `
      <div class="list">
        <div class="listHeader">
          <input class="listName" type="text" autocomplete="off" />
          <div class="listMenu">•••</div>
        </div>
        <div class="listTasks"></div>
        <div class="addCard">
          <button><img src="public/assets/images/add-card.png" /> Add card</button>
        </div>
      </div>
    `,
  );
});
*/
