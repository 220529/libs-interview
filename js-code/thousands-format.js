// 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。

// 示例 1：

// 输入：n = 987
// 输出："987"

// 示例 2：

// 输入：n = 1234
// 输出："1.234"

// 示例 3：

// 输入：n = 123456789
// 输出："123.456.789"

// 示例 4：

// 输入：n = 0
// 输出："0"

/**
 * @param {number} n
 * @return {string}
 */
// var thousandSeparator = function (n) {
//   const len = 3;
//   const str = n.toString();
//   if (str.length <= len) {
//     return str;
//   }
//   const start = str.length % len;
//   const arr = [];
//   if (start) {
//     arr.push(str.slice(0, start));
//   }
//   let e = str.slice(start);
//   while (e.length) {
//     arr.push(e.slice(0, len));
//     e = e.slice(len);
//   }
//   return arr.join(".");
// };

var thousandSeparator = function (n) {
  const len = 3;
  let str = n.toString();
  if (str.length <= len) {
    return str;
  }
  str = str.split("").reverse();
  const res = str.reduce((prev, next, index) => {
    if (index % len === 2 && index !== str.length - 1) {
      return "." + next + prev;
    } else {
      return next + prev;
    }
  }, "");
  return res;
};

var thousandSeparator = function (n) {
  let str = n.toString().split("").reverse();
  const res = str.reduce((prev, next, index) => {
    if (index % 3 === 0) {
      return prev ? next + "." + prev : next + prev;
    } else {
      return next + prev;
    }
  }, "");
  return res;
};

console.log("thousandSeparator", thousandSeparator(123456789));
