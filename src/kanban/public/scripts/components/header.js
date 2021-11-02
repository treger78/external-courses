const header = document.getElementById('header');

header.innerHTML = `
  <a id="appLogo" href="index.html">
    <div id="logo"><img src="public/assets/images/logo.png" /></div>
    <div>Awesome Kanban Board</div>
  </a>
  <div id="headerRightItems">
    <div id="createNewListItem"></div>
    <div id="userMenu">
      <div id="userAvatar">
        <img src="public/assets/images/user-avatar.png" />
      </div>
      <div id="arrowDown">></div>
    </div>
  </div>
`;
