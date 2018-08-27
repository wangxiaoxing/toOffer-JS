function queen(n) {
  //每一行的皇后所在的列序号
  let result = 0;
  let colIndex = [];
  for (let i = 0; i < n; i++) {
    colIndex.push(i);
  }
  //对colIndex进行排列组合
  let arr = permutation(colIndex);
  // let arr = createArr(colIndex.join(''));
  for (let m = 0; m < arr.length; m++) {
    let flag = false;
    for (let i = 0; i < arr[m].length; i++) {
      for (let j = 0; j < arr[m].length; j++) {
        if (i != j) {
          if (i - j == arr[m][i] - arr[m][j] || i - j == arr[m][j] - arr[m][i]) {
            result++;
            flag = true;
            break;
           }
         }
      }
      if (flag) {
        break;
       }
    }
   }
  console.log(arr.length-result);
}
//字符串全排列
function createArr(str){
  if(str.length==1){
     let result=[];
     result.push(str);
     return result;
 }else {
     let result=[];
     let left=str[0];
     let rest=str.slice(1,str.lenth);
     let preResult=createArr(rest);
     for(let i=0;i<preResult.length;i++){
         for(let j=0;j<preResult[i].length+1;j++){
             let temp=preResult[i].slice(0,j)+left+preResult[i].slice(j,preResult[i].length);
             result.push(temp);
         }
     }
     return [...new Set(result)];
 }
}
//数组全排列
function permutation(arr) {
  if (arr.length == 1) {
    let result=[];
    result.push([arr[0]]);
    return result;
  } else {
    let result = [];
    let left = arr[0];
    let rest = arr.slice(1, arr.length);
    let restPerm = permutation(rest);
    for (let i = 0; i < restPerm.length; i++) {
      for (let j = 0; j <=restPerm[i].length; j++) {
        let temp = restPerm[i].slice(0, j).concat(left, restPerm[i].slice(j));
        result.push(temp);
       }
    }
    return result;
   }
  
 }
queen(8);