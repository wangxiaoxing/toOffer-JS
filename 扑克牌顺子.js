function IsContinuous(numbers) {
  if (numbers == null || numbers.length != 5) return false;
  numbers.sort((val1, val2) => {
    return val1 - val2;
  });
  //统计0的个数和连续的个数
  let zeroNum = 0;
  let diffNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) {
      zeroNum++;
      numbers.splice(i, 1);
      i--;
     }
  }
  for (let j = 0; j < numbers.length-1; j++) {
    if (numbers[j] + 1 != numbers[j + 1]) {
      diffNumber++;
     }
   }
  if (diffNumber > zeroNum) {
    return false;
  } else { 
    return true;
  }
}
console.log(IsContinuous([4, 6, 5, 3, 2]));