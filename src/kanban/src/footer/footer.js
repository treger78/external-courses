// eslint-disable-next-line import/extensions
import tasksCounter from './tasksCounter.js';

const footer = document.getElementById('footer');

footer.innerHTML = `
  <div id="footerStatusTasks">
    <div>Active tasks: <span id="activeTasks"></span></div>
    <div>Finished tasks: <span id="finishedTasks"></span></div>
  </div>
  <div>Kanban board by Ilia Pustograev, 2021</div>
`;

tasksCounter();
