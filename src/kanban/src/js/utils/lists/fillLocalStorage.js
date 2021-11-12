function fillLocalStorage(objName, _lists) {
  return localStorage.setItem(objName, JSON.stringify(_lists));
}

export { fillLocalStorage };
