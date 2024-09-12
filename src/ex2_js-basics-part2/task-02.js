function showArrayElem(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(`${i} element of the array: ${arr[i]}`);
  }
  console.log(`Array element qty = ${arr.length}`);
  return 0;
}

module.exports = showArrayElem;
