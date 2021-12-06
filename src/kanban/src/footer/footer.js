// eslint-disable-next-line import/extensions
const tasksCounterObj = await import('./tasksCounter.js');
const tasksCounter = tasksCounterObj.tasksCounter;
const footer = document.getElementById('footer');

footer.innerHTML = `
  <div id="footerStatusTasks">
    <div>Active tasks: <span id="activeTasks"></span></div>
    <div>Finished tasks: <span id="finishedTasks"></span></div>
  </div>
  <div>Kanban board by Ilia Pustograev, 2021</div>
`;

tasksCounter();
