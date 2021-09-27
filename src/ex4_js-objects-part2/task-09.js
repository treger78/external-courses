function insertStr(str, insStr, wordPosition) {
  const newStr = str.trim().split(' ');
  const newInsStr = insStr.trim().split(' ');

  return [...newStr.slice(0, wordPosition + 1), ...newInsStr, ...newStr.slice(wordPosition + 1)].join(' ');
}

module.exports = insertStr;
