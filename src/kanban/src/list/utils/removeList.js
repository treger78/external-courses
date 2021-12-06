/* eslint-disable import/extensions */
import fillLocalStorage from './fillLocalStorage.js';
import insertListsFromLocalStorage from './insertListsFromLocalStorage.js';
import changeAddCardBtnState from './changeAddCardBtnState.js';
import tasksCounter from '../../footer/tasksCounter.js';

export default function removeList(_lists, listIndex) {
  _lists.splice(listIndex, 1);

  fillLocalStorage('lists', _lists);

  document.getElementById('main').textContent = '';

  if (_lists.length) {
    insertListsFromLocalStorage('lists');
    changeAddCardBtnState('lists');
  } else {
    document.getElementById('main').innerHTML = '<div id="mainIsEmpty">You do not have active task lists, add new ones using the button "Create new list"!</div>';
  }

  tasksCounter();

  return _lists.length;
}
