//求第n个丑数（只包含因子2,3,5的数）,暴力求解
function isUglyNumber(number) {
  while (number % 2 == 0) {
    number = number / 2;
  }
  while (number % 3 == 0) {
    number = number / 3;
  }
  while (number % 5 == 0) {
    number = number / 5;
  }
  if (number == 1) {
    return true;
  } else {
    return false;
   }
}
function getUglyNumber(n) {
  let index = 0;
  for (let i = 1; ; i++) {
    if (isUglyNumber(i)) {
      index++;
    }
    if (index == n) { 
      return i;
    }
   }
}
console.log(getUglyNumber(6));
//法2：递归
function getUglyNumber2(n) {
  let uglys = [1];
  let index2 = 0, index3 = 0, index5 = 0;
  for (let i = 1; i < n; i++) {
    uglys[i] = Math.min(uglys[index2] * 2, uglys[index3] * 3, uglys[index5] * 5);
    if (uglys[i] == uglys[index2] * 2) index2++;
    if (uglys[i] == uglys[index3] * 3) index3++;
    if (uglys[i] == uglys[index5] * 5) index5++;
  }
  return uglys[n - 1];
}
console.log(getUglyNumber2(6));
