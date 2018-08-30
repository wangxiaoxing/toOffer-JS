//阶乘尾递归优化
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function factorial2(n, total) {
  if (n == 1) return total;
  return factorial2(n - 1, total * n);
}
//利用函数默认值优化
function factorial3(n, total = 1) {
  if (n == 1) return total;
  return factorial3(n - 1, total * n);
}
//利用柯里化优化
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
//斐波那契数列
function Fibonacci(n) {
  if (n <= 1) {
    return 1
  };
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function Fibonacci2(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    return ac2
  };
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}