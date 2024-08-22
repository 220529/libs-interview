// 斐波那契数列
// 0 1 1 2 3
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

// var fib = function (n) {
//   if (n < 2) {
//     return n;
//   }
//   const obj = {};
//   for (let i = 0; i < n; i++) {
//     if (i < 2) {
//       obj[i] = i;
//     } else {
//       obj[i] = obj[i - 1] + obj[i - 2];
//     }
//   }
//   return obj[n - 1] + obj[n - 2];
// };

var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let n1 = 1;
  let n2 = 0;
  let res = 0;
  for (let i = 2; i < n + 1; i++) {
    res = n1 + n2;
    n2 = n1;
    n1 = res;
  }
  return res;
};
