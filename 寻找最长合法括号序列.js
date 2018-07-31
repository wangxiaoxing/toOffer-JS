// 假如给你一个由’(‘和’)’组成的一个随机的括号序列，当然，这个括号序列肯定不能保证是左右括号匹配的，所以给你的任务便是去掉其中的一些括号，使得剩下的括号序列能够左右括号匹配且长度最长，即最长的合法括号序列。
function getMaxLen(str) {
    if (str[0] == ')') {
        str = str.substring(1);
    }
    var left = 0;
    var maxLen = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] == '(') {
            left++;
        } else {
            left--;
            if (left < 0) {
                left = 0;
            } else {
                maxLen = maxLen + 2;
             }
         }
    }
    return maxLen;
}
console.log(getMaxLen('(()'));