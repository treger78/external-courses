const obj = {};

obj.numberProp = 123;
obj.strProp = 'str';
obj.andOneMoreStrProp = 'str2';
obj.funcProp = function showNumberProp() {
  return this.numberProp;
};

delete obj.andOneMoreStrProp;

module.exports = obj;
