function hasPath(martix, rows, cols, path) {
  if (path.length <= 0) {
    return true;
  }
  let visited = [];
  let temp = [];
  let i, j;
  for (i = 0; i < rows; i++) {
    temp = [];
    for (j = 0; j < cols; j++) {
      temp.push(false);
    }
    visited.push(temp);
  }
  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      if (hasPathCore(martix, rows, cols, i, j, path, 0, visited)) {
        return true;
       }
     }
  }
  return false;
}
function hasPathCore(matrix, rows, cols, row, col, path, pathIndex, visited) {
  let hasPath = false;
  if (row < rows && col < cols && row >= 0 && col >= 0 && visited[row][col] === false) {
    if (matrix[row * cols + col] == path[pathIndex]) {
      visited[row][col] = true;
      if (pathIndex == path.length - 1) {
        hasPath = true;
      } else {
        hasPath = hasPathCore(matrix, rows, cols, row - 1, col, path, pathIndex+1, visited) ||
          hasPathCore(matrix, rows, cols, row + 1, col, path, pathIndex+1, visited) ||
          hasPathCore(matrix, rows, cols, row, col - 1, path, pathIndex+1, visited) ||
          hasPathCore(matrix, rows, cols, row, col + 1, path, pathIndex+1, visited);
        if (!hasPath) {
          visited[row][col] = false;
        }
      }
    }
  }
  return hasPath;
 }