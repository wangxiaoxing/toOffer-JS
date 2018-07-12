function reOrderArray(array){
    var arr1=[],arr2=[];
    for(let i of array){
        if(i%2==0){
            arr2.push(i);
        }else{
            arr1.push(i);
        }
    }
    return arr1.concat(arr2);
}
console.log(reOrderArray([1,3,2,4,6,5,7,8]));