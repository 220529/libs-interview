// 对称数;

const findPalindromeNumbers = (num) => {
  let count = 0;
  for (let i = 1; i < num + 1; i++) {
    const str = i.toString();
    if (str.length === 1) {
      count++;
      continue;
    }
    let l = 0;
    let r = str.length - 1;
    let flag = true;
    while (l <= r) {
      if (str[l] !== str[r]) {
        flag = false;
        break;
      } else {
        l++;
        r--;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
};

console.log(findPalindromeNumbers(200));
 