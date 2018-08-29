function StrToInt(str) {
  if (str.length < 1 || str == null||str=='0') {
    return 0;
  }
  let index = 0, positive = true;
  if (str[0] == '+') {
    index = 1;
  } else if (str[0] == '-') {
    index = 1;
    positive = false;
  }
  return StrTransform(str,index,positive)
}
function StrTransform(str, index, positive) {
  let temp = positive ? 1 : -1;
  let number = 0;
  for (let i = index; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      number = number * 10 + (str[i] - '0') * temp;
    } else {
      return 0;
     }
  }
  return number;
}
console.log(StrToInt('0111222'));