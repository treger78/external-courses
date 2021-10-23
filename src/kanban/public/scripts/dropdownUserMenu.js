const userMenu = document.getElementById('userMenu');
const userAvatar = document.getElementById('userAvatar');
const arrowDown = document.getElementById('arrowDown');
let isActiveMenu = false;

function generateDropdownUserMenu() {
  arrowDown.style.transform = 'rotate(-90deg)';

  userMenu.insertAdjacentHTML(
    'beforeend',
    `
      <nav id="dropdowUserMenu">
        <ul>
          <li><a href="">My account</a></li>
          <li><a href="">My tasks</a></li>
          <li><a href="">Log out</a></li>
        </ul>
      </nav>
    `,
  );

  isActiveMenu = true;
}

function removeDropdownUserMenu() {
  arrowDown.style.transform = 'rotate(90deg)';

  document.getElementById('dropdowUserMenu').remove();

  isActiveMenu = false;
}

arrowDown.addEventListener('click', () => {
  if (!isActiveMenu) {
    generateDropdownUserMenu();
  } else {
    removeDropdownUserMenu();
  }
});

userAvatar.addEventListener('click', () => {
  if (!isActiveMenu) {
    generateDropdownUserMenu();
  } else {
    removeDropdownUserMenu();
  }
});
