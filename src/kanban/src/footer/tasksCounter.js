export function tasksCounter() {
  const lists = JSON.parse(localStorage.getItem('lists'));
  if (lists !== null && lists.length) {
    document.getElementById('activeTasks').innerText = `${lists[0].tasks.length}`;
    document.getElementById('finishedTasks').innerText = `${lists[lists.length - 1].tasks.length}`;
  } else {
    document.getElementById('activeTasks').innerText = '0';
    document.getElementById('finishedTasks').innerText = '0';
  }
}
