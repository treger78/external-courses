/* eslint-disable import/extensions */
const fillLocalStorageObj = await import('./fillLocalStorage.js');
const changeAddCardBtnStateObj = await import('./changeAddCardBtnState.js');

const fillLocalStorage = fillLocalStorageObj.fillLocalStorage;
const changeAddCardBtnState = changeAddCardBtnStateObj.changeAddCardBtnState;

function addTaskToListByNameAndRemoveFromPreviousList(_newTaskNameValue, listIndexParam, _lists,
  _previousListTasks, previousListIndexParam) {
  const newTaskName = _newTaskNameValue.value;
  const newTaskID = `${_lists[listIndexParam].tasks.length}`;

  _lists[listIndexParam].tasks.push({ id: newTaskID, name: newTaskName });

  const newTask = document.createElement('li');

  newTask.className = 'task';
  newTask.innerText = newTaskName;

  _newTaskNameValue.replaceWith(newTask);

  for (let i = 0; i < _previousListTasks.length; i += 1) {
    if (_lists[previousListIndexParam].tasks[i].name === newTaskName) {
      _lists[previousListIndexParam].tasks.splice(i, 1);

      _previousListTasks[i].remove();

      fillLocalStorage('lists', _lists);

      return changeAddCardBtnState('lists');
    }
  }

  return _lists;
}

export { addTaskToListByNameAndRemoveFromPreviousList };
