export default function createAndAppendDropdownTasks(targetListIndexParam, previousListIndexParam) {
  const listTasks = document.getElementsByClassName('listTasks')[targetListIndexParam];
  const dropdownTasks = document.createElement('select');

  dropdownTasks.className = 'task';
  dropdownTasks.style.border = 'none';
  dropdownTasks.style.width = '16rem';
  dropdownTasks.style.fontSize = '18px';
  dropdownTasks.style.padding = '0.5rem';

  dropdownTasks.insertAdjacentHTML(
    'beforeend',
    `
      <option disabled selected>Select task</option>
    `,
  );

  const previousList = document.getElementsByClassName('listTasks')[previousListIndexParam];
  const previousListTasks = previousList.children;

  for (let i = 0; i < previousListTasks.length; i += 1) {
    dropdownTasks.insertAdjacentHTML(
      'beforeend',
      `
        <option>${previousListTasks[i].textContent}</option>
      `,
    );
  }

  listTasks.append(dropdownTasks);

  return { dropdownTasks, previousListTasks };
}
