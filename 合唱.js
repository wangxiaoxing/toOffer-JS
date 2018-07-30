function sing(arr) {
    let length = arr.length;
    let initSort = arr.concat();
    let sortArr = arr.sort(function (val1, val2) {
        return val1 - val2;
    });
    let before = [],
        after = [],
        middleIndex = parseInt((length-1) / 2);
    let middle = sortArr[middleIndex];
    for (let i = 0; i < length; i++) {
        if (initSort[i] <= middle) {
            before.push(initSort[i]);
        } else {
            after.push(initSort[i]);
        }
    }
    console.log(cal(before) + cal(after));
}

function cal(arr) {
    let sum = 0;
    for (let j = 0, len = arr.length; j < len - 1; j++) {
        sum = sum + Math.abs(arr[j + 1] - arr[j]);
    }
    return sum;
}
sing([1,5,6,2,1]);
