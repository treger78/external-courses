function isArrayWithTheSameElems(arr) {
  return arr.every((elem) => arr[0] === elem);
}

module.exports = isArrayWithTheSameElems;
