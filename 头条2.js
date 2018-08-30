let n = parserInt(readline());
let users = readline().split(' ');
let q = parserInt(readline());
for (let i = 0; i < q; i++) {
  let result = 0;
  let input = readline().split(' ');
  let l = parseInt(input[0]);
  let r = parseInt(input[1]);
  let k = parseInt(input[2]);
  for (let j = l - 1; j < r; j++) {
    if (users[j] == k) {
      result++;
     }
  }
  console.log(result);
 }