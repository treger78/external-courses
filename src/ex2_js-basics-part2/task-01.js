function strOrNumber(val) {
  if (typeof val !== 'number' && typeof val !== 'string') {
    return undefined;
  }
  return typeof val;
}

module.exports = strOrNumber;
