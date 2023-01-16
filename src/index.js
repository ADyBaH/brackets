module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) return false;
  let flag = true;
  bracketsConfig = bracketsConfig.map(e => e.join(''));
  while(flag) {
    for(const bracket of bracketsConfig) {
        if(str.includes(bracket)) {
          str = str.replace(bracket, '')
        } else {
          if(!bracketsConfig.some(e => str.includes(e))) flag = false;
        }
    }
  }
  if(str.length !== 0) return false;
  return true;
}
