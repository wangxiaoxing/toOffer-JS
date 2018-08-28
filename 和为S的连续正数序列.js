function FindContinuousSequence(sum) {
  if (sum <= 2) return [];
  let result = [1, 2];
  let a = 1, b = 2;
  while (a < (sum + 1) / 2&&result.length>1) {
    // console.log(result);
    let temp = result.reduce((prev, value) => {
      return prev + value;
    });
    if (temp < sum) {
      b++;
      result.push(b);
    } else if (temp > sum) {
      result.splice(0,1);
    } else {
      console.log(result);
      b++;
      result.push(b);
     }
   }
}
FindContinuousSequence(9);