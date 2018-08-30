function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
   }
}
function tailFactorial(n, total) {
  if (n == 1) return total;
  return tailFactorial(n - 1, n * total);
}
const factorial4 = currying(tailFactorial, 1);
console.log(factorial4(5));