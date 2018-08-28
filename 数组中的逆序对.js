function InversePairs(data)
{
    if(!data||data.length<2) return 0;

    var copy = data.slice(),
        count = 0;
    count = mergeSort(data,copy,0,data.length-1);
    return count%1000000007;
}

function mergeSort(data,copy,start,end){
    if(end===start) return 0;
    var mid = (end-start)>>1,
        left = mergeSort(copy,data,start,start+mid),
        right = mergeSort(copy,data,start+mid+1,end),
        count = 0,
        p = start+mid,//前一个数组的最后一个下标
        q = end,//后一个数组的下标
        copyIndex = end;//辅助数组下标，从最后一个算起

    while(p>=start&&q>=start+mid+1){
        if(data[p]>data[q]){
            count+=q-start-mid;
            copy[copyIndex--] = data[p--];
        }else{
            copy[copyIndex--] = data[q--];
        }
    }

    while(p>=start){
        copy[copyIndex--] = data[p--];
    }

    while(q>=start+mid+1){
        copy[copyIndex--] = data[q--];
    }
    return left+right+count;
}