function getObjDeepClone(obj) {
  if (obj === null) return null;

  const newArr = { ...obj };
  const keysArr = Object.keys(newArr);

  for (let i = 0; i < keysArr.length; i += 1) {
    if (typeof obj[keysArr[i]] === 'object') {
      newArr[keysArr[i]] = getObjDeepClone(obj[keysArr[i]]);
    } else {
      newArr[keysArr[i]] = obj[keysArr[i]];
    }
  }

  if (Array.isArray(obj)) {
    newArr.length = obj.length;
    return Array.from(newArr);
  }

  return newArr;
}

module.exports = getObjDeepClone;
