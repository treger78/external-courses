/* eslint-disable import/extensions */
const fillLocalStorageObj = await import('./fillLocalStorage.js');
const changeAddCardBtnStateObj = await import('./changeAddCardBtnState.js');
const createAndAppendDropdownTasksObj = await import('./createAndAppendDropdownTasks.js');
const addTaskToListByNameAndRemoveFromPreviousListObj = await import('./addTaskToListByNameAndRemoveFromPreviousList.js');
let lists = await import('../../lists/listsArray.js');

const fillLocalStorage = fillLocalStorageObj.fillLocalStorage;
const changeAddCardBtnState = changeAddCardBtnStateObj.changeAddCardBtnState;
const createAndAppendDropdownTasks = createAndAppendDropdownTasksObj.createAndAppendDropdownTasks;
// eslint-disable-next-line max-len
const addTaskToListByNameAndRemoveFromPreviousList = addTaskToListByNameAndRemoveFromPreviousListObj.addTaskToListByNameAndRemoveFromPreviousList;

lists = lists.listsArray;

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

      const newTaskID = `${lists[0].tasks.length}`;

      lists[0].tasks.push({ id: newTaskID, name: inputTaskNameValue });

      fillLocalStorage('lists', lists);

      const newTask = document.createElement('li');

      newTask.className = 'task';
      newTask.innerText = inputTaskNameValue;

      inputTaskName.replaceWith(newTask);

      lists = changeAddCardBtnState('lists');
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

export { addListenersToLists };
