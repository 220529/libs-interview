/**
 * 寻找和为 n 的两个数（嵌套循环）
 * @param arr arr
 * @param n n
 */

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。

const findTowNumbers = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const next = arr[j];
      if (next !== prev && next + prev === num) {
        return [prev, next];
      }
    }
  }
};

const findTowNumbers2 = (arr, num) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (obj[item]) {
      return [obj[item], item];
    } else {
      obj[num - item] = item;
    }
  }
};

var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (Reflect.has(obj, item)) {
      return [nums.indexOf(obj[item]), i];
    } else {
      obj[target - item] = item;
    }
  }
};

function findTowNumbers3(arr, n) {
  const res = [];

  const length = arr.length;
  if (length === 0) return res;

  let i = 0; // 头
  let j = length - 1; // 尾

  // O(n)
  while (i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    const sum = n1 + n2;

    if (sum > n) {
      // sum 大于 n ，则 j 要向前移动
      j--;
    } else if (sum < n) {
      // sum 小于 n ，则 i 要向后移动
      i++;
    } else {
      // 相等
      res.push(i);
      res.push(j);
      break;
    }
  }

  return res;
}

// const arr = [1, 2, 4, 7, 11, 15];
// const res = findTowNumbers3(arr, 15);
// console.log("res", res);

// const arr = [0, 4, 3, 0];
// const res2 = twoSum(arr, 15);
// console.log("res2", res2);
