//判断一个字符串是否是由它的一个子串进行多次首尾拼接构成的
function judgeString(str) {
    var length = str.length;
    for (let i = length - 1; i >=0; i--) {
        if (i == 0) {
            return false;
        }
        if (length % i != 0) {
            continue;
        } else {
            let interval = i;
            let groupNum = length / i;
            let first = str.substring(0, interval);
            let result = first.repeat(groupNum);
            if (result == str) {
                return first;
            } else {
                continue;
            }


        }
    }
}
//比较两个字符串是否相等
function compare(str1, str2) {
    if (str1.length == str2.length) {
        for (let i = 0, len = str1.length; i < len; i++) {
            if (str1[i] != str2[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
console.log(judgeString('aaaaaa'));