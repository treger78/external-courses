function isObjIncludeStr(str, obj) {
  const newObj = Object.assign(obj);
  if (!obj.hasOwnProperty(str)) {
    newObj[str] = 'new';
  }
  return newObj;
}

module.exports = isObjIncludeStr;
