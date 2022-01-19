function showObj(obj) {
  Object.keys(obj).forEach((key) => {
    console.log(`${key}: ${obj[key]}`);
  });

  return undefined;
}

module.exports = showObj;
