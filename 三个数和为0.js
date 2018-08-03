function search(arr) {
  arr.sort((val1, val2) => {
    val1 - val2;
  });
  let len = arr.length;
  let result = [];
  for (let i = 0; i < len - 2; i++) {
    j = i + 1;
    k = len - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] == 0) {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
      } else if (arr[i] + arr[j] + arr[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return deleteRepeat(result);
}
//数组去重，由于数组的每一项是引用类型，不能用set数据结构
function deleteRepeat(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i].toString() == arr[i + 1].toString()) {
      arr.splice(i + 1, 1);
      i--;
     }
  }
  return arr;
 }
console.log(search([-3,-2, -1 ,0 ,1 ,1 ,2 ,2, 4]));