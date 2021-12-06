/* eslint-disable import/extensions */
import tasksCounter from '../footer/tasksCounter.js';
import { listsArray as lists } from './utils/listsArray.js';
import fillLocalStorage from './utils/fillLocalStorage.js';
import changeAddCardBtnState from './utils/changeAddCardBtnState.js';
import insertListsFromLocalStorage from './utils/insertListsFromLocalStorage.js';
import addListenersToLists from './utils/addListenersToLists.js';
import createNewList from './utils/createNewList.js';

if (localStorage.length === 0) {
  fillLocalStorage('lists', lists);
  tasksCounter();
}

if (JSON.parse(localStorage.getItem('lists')).length) {
  insertListsFromLocalStorage('lists');
  changeAddCardBtnState('lists');
  addListenersToLists(lists);
} else {
  document.getElementById('main').innerHTML = '<div id="mainIsEmpty">You do not have active task lists, add new ones using the button "Create new list"!</div>';

  lists.length = 0;
}

createNewList(lists);
