function isNumberic(s) {
  let reg = /[\+\-]?[0-9]*(\.[0-9]*)?([eE][\+-]?[0-9]+)?/g;
  return reg.test(s);
}
console.log(isNumberic('+100'));

function isNumberic2(s) {
  return !Number.isNaN(Number(s));
 }