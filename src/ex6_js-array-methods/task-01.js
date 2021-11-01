function slicePolyfill(array, begin, end) {
  if (begin === undefined && end === undefined) return [...array];

  function copyArr(arr, start, finish) {
    const newArr = [];

    for (let i = start; i < finish; i += 1) {
      if (arr[i] !== undefined) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  }

  if (end === undefined) {
    if (begin < 0) {
      return copyArr(array, array.length - Math.abs(begin), array.length);
    }

    return copyArr(array, begin, array.length);
  }

  if (begin < 0 && end < 0) {
    return copyArr(array, array.length - Math.abs(begin), array.length - Math.abs(end));
  }

  if (begin < 0) {
    return copyArr(array, array.length - Math.abs(begin), end);
  }

  if (end < 0) {
    return copyArr(array, begin, array.length - Math.abs(end));
  }

  return copyArr(array, begin, end);
}

module.exports = slicePolyfill;
