// 1446. 连续字符
/**
 * @param {string} s
 * @return {number}
 */
// var maxPower = function (s) {
//   const r = {
//     key: "",
//     count: 0,
//   };
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     let e1 = s[i];
//     count = 1;

//     for (let j = i + 1; j < s.length; j++) {
//       const e2 = s[j];
//       if (e2 === e1) {
//         count++;
//       } else {
//         i = j - 1;
//         break;
//       }
//     }

//     if (count > r.count) {
//       r.key = e1;
//       r.count = count;
//       count = 0;
//     }
//   }
//   return r.count;
// };

var maxPower = function (s) {
  let i = 0;
  let j = 0;
  let count = 0;
  const r = {
    chat: "",
    count: 0,
  };
  while (i < s.length) {
    const cur = s[i];
    const next = s[j];
    if (next === cur) {
      count++;
      i++;
    } else {
      j = i;
      count = 0;
    }
    if (count > r.count) {
      r.chat = cur;
      r.count = count;
    }
  }
  return r.count;
};

// const str = "ccbccbb";
const str = "ddeeeeec";
console.log("str", maxPower(str));
