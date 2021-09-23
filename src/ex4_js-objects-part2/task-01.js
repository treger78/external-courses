function getPropVal(prop, obj) {
  if (Object.keys(obj.__proto__).includes(prop)) {
    return obj[prop];
  }
  return undefined;
}

module.exports = getPropVal;
