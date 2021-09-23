function convertFirstCharInEachWordToUpperCase(str) {
  return str.trim().split(' ').map((elem) => elem[0].toUpperCase() + elem.slice(1)).join(' ');
}

module.exports = convertFirstCharInEachWordToUpperCase;
