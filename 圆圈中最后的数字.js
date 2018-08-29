function LastRemaining_Solution(n, m)
{
    // write code here
    if(n<1||m<1) return -1; 
    var arr=[];
    for(var i=0;i<n;i++) arr.push(i);
    var idx=0;
    var start=0;
    while(arr.length>1){
        for(var i=1;i<m;i++){//找到第m个位置
            idx=(idx+1)%arr.length;
        }
        arr.splice(idx,1)       
    } 
    return arr[0];
}

function LastRemaining_Solution2(n, m) { 
  if (n < 1 || m < 1) return -1;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  let index = 0;
  while (arr.length > 1) {
    for (let j = 1; j < m; j++) {
      index = (index + 1) % arr.length;
    }
    arr.splice(index, 1);
  }
  return arr[0];
}