// 在一个字符串(1<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置
function oncePosition(str) {
  let obj = {};
  for (let i of str) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
     }
  }
  for (let key in obj) {
    if (obj[key] == 1) {
      return str.indexOf(key);
     }
   }
}
console.log(oncePosition('122134535'));