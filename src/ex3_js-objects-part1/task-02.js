function showObj(obj) {
  Object.keys(obj).forEach((key) => {
    console.log(`${key}: ${obj[key]}`);
  });
  return 0;
}

module.exports = showObj;
