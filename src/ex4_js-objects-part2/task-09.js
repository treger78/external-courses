function insertStr(str, insStr, wordPosition) {
  const newStr = str.trim().split(' ');
  newStr.splice(wordPosition + 1, 0, insStr);
  return newStr.join(' ');
}

module.exports = insertStr;
