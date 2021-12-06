// eslint-disable-next-line import/extensions
import tasksCounter from '../../footer/tasksCounter.js';

export default function insertListsFromLocalStorage(objName) {
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

  tasksCounter();

  return refreshedLists;
}
