function oddEvenZeroCount(arr) {
  const newArr = [0, 0, 0];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') {
      i += 1;
    } else if (arr[i] === 0) {
      newArr[2] += 1;
    } else if (arr[i] % 2 === 0) {
      newArr[0] += 1;
    } else {
      newArr[1] += 1;
    }
  }
  return newArr;
}

module.exports = oddEvenZeroCount;
