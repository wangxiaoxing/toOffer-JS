function movingCount(threshold, rows, cols) {
  let count = 0;
  if (threshold < 1 || rows < 1 || cols < 1) {
    return count;
  }
  let visited = [];
  for (let i = 0; i < rows; i++) {
    visited[i] = [];
    for (let j = 0; j < cols; j++) {
      visited[i].push(false);
     }
  }
  count = movingCountSum(threshold, 0, 0, rows, cols, visited);
  return count;
}
function movingCountSum(threshold, m, n, rows, cols, visited) {
  let count = 0;
  if (m >= 0 && m < rows && n >= 0 && n < cols && !visited[m][n] && getSum(m, n) <= threshold) {
    visited[m][n] = true;
    count = 1 + movingCountSum(threshold, m, n - 1, rows, cols, visited) +
      movingCountSum(threshold, m, n + 1, rows, cols, visited) + movingCountSum(threshold, m-1, n, rows, cols, visited) +
      movingCountSum(threshold,m+1,n,rows,cols,visited)
  }
  return count;
}
function getSum(m, n) {
  let str = '' + m + n;
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]);
  }
  return sum;
 }