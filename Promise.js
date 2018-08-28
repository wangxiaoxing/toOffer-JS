function createPromise() {
  return new Promise((resolve, reject) => {
    console.log(111);
    resolve('222');
   })
}
createPromise().then((result) => {
  //这里return的还是promise
  return result;
}).then((result) => {
  console.log(result);
 })