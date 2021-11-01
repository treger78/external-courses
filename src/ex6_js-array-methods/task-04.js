function filterPolyfill(array, callback) {
  if (array === undefined || array.length === 0) return [];

  const newArr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

module.exports = filterPolyfill;
