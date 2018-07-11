 //只能跳一阶或二阶 f(n)=f(n-1)+f(n-2)
 function jump1(n){
    let result=[];
    result[1]=1;
    result[2]=2;
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }else if(n==2){
        return 2;
    }else{
        for(let i=3;i<=n;i++){
            result[i]=result[i-1]+result[i-2];
        }
        return result[n];
    }
}
console.log(jump1(5));

//可以跳1到n阶 f(n)=1+f(1)+f(2)+...+f(n-1)
function jump2(n){
    var result=1;
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        for(let i=1;i<=n-1;i++){
            result+=jump2(i);
        }
        return result;
    }
}
console.log(jump2(5));
