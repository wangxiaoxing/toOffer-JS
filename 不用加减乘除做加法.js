function Add(num1, num2) {
  let sum, carry;
  do {
    sum = num1 ^ num2;
    carry = (num1 & num2) << 1;
    num1 = sum;
    num2 = carry;
  } while (num2 != 0)
  return sum;
}
console.log(Add(5, 20));