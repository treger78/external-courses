/* eslint-disable import/extensions */
import fillLocalStorage from './fillLocalStorage.js';
import tasksCounter from '../../footer/tasksCounter.js';
import changeAddCardBtnState from './changeAddCardBtnState.js';

export default function addTaskToListByNameAndRemoveFromPreviousList(
  _newTaskNameValue, listIndexParam, _lists, _previousListTasks, previousListIndexParam,
) {
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

      tasksCounter();

      return changeAddCardBtnState('lists');
    }
  }

  return _lists;
}
