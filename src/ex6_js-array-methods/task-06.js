function reducePolyfill(array, callback, initialValue) {
  if ((array === undefined || array.length === 0) && initialValue === undefined) {
    return new TypeError();
  }

  if ((array.length === 1 && initialValue === undefined)
    || ((array.length === 0) && initialValue !== undefined)) {
    return array || initialValue;
  }

  let previousValue = initialValue;
  let result;

  for (let i = 0; i < array.length; i += 1) {
    if (previousValue !== undefined) {
      result = callback(previousValue, array[i], i, array);
      previousValue = result;
    } else {
      previousValue = array[0];
    }
  }

  return result;
}

module.exports = reducePolyfill;
