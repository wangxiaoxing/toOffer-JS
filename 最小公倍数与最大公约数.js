//最大公约数
function gcd(n, m) {
  if (m == 0) return n;
  return gcd(m, n % m);
}

//最小公倍数
function lcm(n, m) {
  return n * m / gcd(n, m);
}

//三个数的最小公倍数
function lcm_3(a, b, c){
  let d = lcm(a, b);
  return lcm(d, c);
}
 
console.log(lcm_3(1, 2, 3))



let input=readline().split(' ');
let m1=lcm_3(input[0],input[1],input[2]);
let m2=lcm_3(input[0],input[1],input[3]);
let m3=lcm_3(input[0],input[1],input[4]);
let m4=lcm_3(input[0],input[3],input[2]);
let m5=lcm_3(input[0],input[4],input[2]);
let m6=lcm_3(input[0],input[3],input[4]);
let m7=lcm_3(input[1],input[3],input[2]);
let m8=lcm_3(input[1],input[4],input[2]);
let m9=lcm_3(input[3],input[1],input[4]);
let m10=lcm_3(input[3],input[4],input[2]);
console.log(Math.min(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10));
