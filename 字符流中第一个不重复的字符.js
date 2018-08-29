function FirstAppearingOnce(str) {
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
      return key;
     }
  }
  return '#'
}
console.log(FirstAppearingOnce('google'));