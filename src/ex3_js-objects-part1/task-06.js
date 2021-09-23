function getObjDeepClone(obj) {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
}

module.exports = getObjDeepClone;
