function howManyEachCharInStr(str) {
  const newStr = str.split('').sort().join('');
  let counter = 1;

  for (let i = 0; i < newStr.length; i += 1) {
    if (newStr[i] === newStr[i + 1]) {
      counter += 1;
    } else {
      console.log(`${newStr[i]} = ${counter}`);
      counter = 1;
    }
  }
}

module.exports = howManyEachCharInStr;
