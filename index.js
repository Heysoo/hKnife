const hKnife = {
  trim (str){
    return str.replace(/^\s+|\s+$/g, '');
  },
  leftTrim (){
    return str.replace(/^\s+/g, '');
  },
  rightTrim (){
    return str.replace(/\s+$/g, '');
  },
  camelCase (str, flag='-'){
    return str.split(flag).reduce((lastResult, currentStr, index) => {
      return lastResult + (index ? currentStr[0].toUpperCase() + currentStr.slice(1) : currentStr);
    }, '');
  },
};

module.exports = exports = hKnife;