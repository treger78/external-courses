function convertToCamalCase(str) {
  const arr = str.trim().toLowerCase().split(' ');

  for (let i = 1; i < arr.length; i += 1) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

module.exports = convertToCamalCase;
