function calNum(n){
    //如果是负数，则先获得-n-1的二进制表示，将这个二进制表示按位取反 再在最前面加1，统计1的个数
    //32位
    var result=0;
    if(n<0){
        let temp=(-n-1).toString(2);
        let length=31-temp.length;
        for(let i=0;i<length;i++){
            temp='0'+temp;
        }
        for(let i of temp){
            if(i=='0'){
                result++;
            }
        }
        return result+1;        
    }
    if(n==0){
        return 0
    }
    if(n>0){
        let temp=n.toString(2);
        for(let i of temp){
            if(i=='1'){
                result++;
            }
        }
        return result;
    }
}
console.log(calNum(-1));