function mapPolyfill(array, callback) {
  if (array === undefined || array.length === 0) return [];

  const newArr = [];

  for (let i = 0; i < array.length; i += 1) {
    newArr.push(callback(array[i], i, array));
  }

  return newArr;
}

module.exports = mapPolyfill;
