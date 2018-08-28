function FindNumbersWithSum(array, sum) {
  if (array.length < 2) return [];
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let temp = array[left] + array[right];
    if (temp < sum) {
      left++;
    } else if (temp > sum) {
      right--;
    } else {
      return [array[left], array[right]];
     }
  }
  return [];
 }
