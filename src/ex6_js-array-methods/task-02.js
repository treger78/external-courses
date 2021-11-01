function somePolyfill(array, callback) {
  if (array === undefined || array.length === 0) return false;

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) return true;
  }

  return false;
}

module.exports = somePolyfill;
