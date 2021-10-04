const obj = {};

obj.numberProp = 123;
obj.strProp = 'str';
obj.andOneMoreStrProp = 'str2';
obj.showNumberProp = () => this.numberProp;

delete obj.andOneMoreStrProp;

module.exports = obj;
