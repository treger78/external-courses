export default function ListMenu(listMenu) {
  this.listMenu = listMenu;
  this.isActiveListMenu = false;

  this.generateListMenu = () => {
    this.listMenu.insertAdjacentHTML(
      'beforeend',
      `
        <ul class="dropdowListMenu">
          <li class="deleteList">Delete list</li>
        </ul>
      `,
    );

    this.isActiveListMenu = true;
  };

  this.removeListMenu = () => {
    this.listMenu.getElementsByClassName('dropdowListMenu')[0].remove();
    this.isActiveListMenu = false;
  };
}
