/* eslint-disable import/extensions */
let lists = await import('./listsArray.js');
const fillLocalStorageObj = await import('../utils/lists/fillLocalStorage.js');
const changeAddCardBtnStateObj = await import('../utils/lists/changeAddCardBtnState.js');
const addListenersToListsObj = await import('../utils/lists/addListenersToLists.js');

const fillLocalStorage = fillLocalStorageObj.fillLocalStorage;
const changeAddCardBtnState = changeAddCardBtnStateObj.changeAddCardBtnState;
const addListenersToLists = addListenersToListsObj.addListenersToLists;

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

lists = insertListsFromLocalStorage('lists');
lists = changeAddCardBtnState('lists');

addListenersToLists(lists);
