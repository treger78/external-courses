function trimSrt(str) {
  let resultStr = str;

  if (resultStr[0] === ' ') {
    resultStr = resultStr.slice(1);
  }

  if (resultStr[resultStr.length - 1] === ' ') {
    resultStr = resultStr.slice(0, resultStr.length - 1);
  }

  return resultStr;
}

module.exports = trimSrt;
