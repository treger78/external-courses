export default function fillLocalStorage(objName, _lists) {
  return localStorage.setItem(objName, JSON.stringify(_lists));
}
