function padStr(str, number) {
  if (str.length > number) {
    return str.slice(0, number - 1) + String.fromCharCode(8230);
  }

  return str;
}

module.exports = padStr;
