const createNewListItem = document.getElementById('createNewListItem');

createNewListItem.addEventListener('click', () => {
  const createNewListButton = document.getElementById('createNewListButton');

  createNewListItem.insertAdjacentHTML(
    'afterend',
    `
      <form id="createNewList">
        <label>
          Enter list name:
          <input id="listName" autocomplete="off" />
        </label>
        <div id="createNewListActionButtons">
          <button type="button" id="createList">Create</button>
          <button type="button" id="cancelCreate">Cancel</button>
        </div>
      </form>
    `,
  );

  createNewListButton.remove();

  const create = document.getElementById('createList');
  const cancel = document.getElementById('cancelCreate');

  create.addEventListener('click', () => {
    const listName = document.getElementById('listName').value;
    const main = document.getElementById('main');

    /*
    if (listName === '' || listName === undefined) {
      // eslint-disable-next-line no-alert
      alert('Enter list name!');
      return null;
    }
    */

    main.insertAdjacentHTML(
      'beforeend',
      `
        <div class="list">
          <div class="listHeader">
            <div class="listName">${listName}</div>
            <div class="listMenu">...</div>
          </div>
          <div class="listTasks"></div>
          <div class="addCard">
            <button>+ Add card</button>
          </div>
        </div>
      `,
    );
  });

  cancel.addEventListener('click', () => {
    document.getElementById('createNewList').remove();

    createNewListItem.insertAdjacentHTML(
      'afterbegin',
      `
        <button id="createNewListButton">
          <img src="public/assets/images/add.png" />Create new list
        </button>
      `,
    );
  });
});
