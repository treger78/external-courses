/* eslint-disable import/extensions */
import fillLocalStorage from './fillLocalStorage.js';
import tasksCounter from '../../footer/tasksCounter.js';
import changeAddCardBtnState from './changeAddCardBtnState.js';
import createAndAppendDropdownTasks from './createAndAppendDropdownTasks.js';
import addTaskToListByNameAndRemoveFromPreviousList from './addTaskToListByNameAndRemoveFromPreviousList.js';
import ListMenu from '../listMenu/listMenu.js';
import removeList from './removeList.js';

export default function addListenersToLists(_lists) {
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

      tasksCounter();
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

      obj.dropdownTasks.addEventListener('change', () => {
        addTaskToListByNameAndRemoveFromPreviousList(obj.dropdownTasks, i, _lists,
          obj.previousListTasks, i - 1);
      });
    });
  }

  for (let i = 0; i < listsBlocks.length; i += 1) {
    const listMenuBlock = listsBlocks[i].getElementsByClassName('listMenu')[0];
    const listMenu = new ListMenu(listMenuBlock);

    listMenuBlock.addEventListener('click', () => {
      if (!listMenu.isActiveListMenu) {
        listMenu.generateListMenu();

        listMenuBlock.getElementsByClassName('deleteList')[0].addEventListener('click', () => {
          const listLength = removeList(_lists, i);
          if (listLength) addListenersToLists(_lists);
        });
      } else {
        listMenu.removeListMenu();
      }
    });
  }
}
