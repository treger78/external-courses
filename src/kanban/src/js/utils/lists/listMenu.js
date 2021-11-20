function ListMenu(listMenu) {
  this.listMenu = listMenu;
  this.isActiveListMenu = false;

  // this.getListMenu = () => this.listMenu;

  this.generateListMenu = () => {
    this.listMenu.insertAdjacentHTML(
      'beforeend',
      `
        <ul class="dropdowListMenu">
          <li>Delete list</li>
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

export { ListMenu };
