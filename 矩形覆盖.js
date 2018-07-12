//f(n)=f(n-1)+f(n-2) f(1)=1 f(2)=2
function cover(n){
    var result=[];
    result[1]=1;
    result[2]=2;
    if(n==0){
        return 0;
    }
    if(n<1){
        return 
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
console.log(cover(4));