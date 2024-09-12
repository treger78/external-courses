function findMaxElem(arr) {
  let max = 0;
  arr.forEach((e) => {
    if (e > max) max = e;
  });
  return max;
}

module.exports = findMaxElem;
