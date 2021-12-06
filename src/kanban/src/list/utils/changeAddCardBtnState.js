export default function changeAddCardBtnState(objName) {
  const refreshedLists = JSON.parse(localStorage.getItem(objName));

  if (document.getElementsByClassName('addCardButton').length <= 1) {
    return refreshedLists;
  }

  for (let i = 0; i < refreshedLists.length - 1; i += 1) {
    const addCardButton = document.getElementsByClassName('addCardButton')[i + 1];

    if (refreshedLists[i].tasks.length < 1) {
      addCardButton.setAttribute('disabled', 'disabled');
    } else if (addCardButton !== undefined) {
      addCardButton.removeAttribute('disabled');
    }
  }

  return refreshedLists;
}
