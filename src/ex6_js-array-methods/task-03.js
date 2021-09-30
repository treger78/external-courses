function everyPolyfill(array, callback) {
  if (array === undefined || array.length === 0) return true;

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array) === false) return false;
  }

  return true;
}

module.exports = everyPolyfill;
