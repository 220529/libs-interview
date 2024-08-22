/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   let n = 0;
//   for (let i = 0; i < nums.length - n; i++) {
//     const e = nums[i];
//     if (e === 0) {
//       nums.push(nums.splice(i, 1)[0]);
//       i--;
//       n++;
//     }
//   }
// };

// var moveZeroes = function (nums) {
//   const getL = () => {
//     return nums.indexOf(0);
//   };
//   let l = getL();
//   if (l < 0) {
//     return nums;
//   }
//   const getR = () => {
//     const index = nums.slice(l + 1).findIndex((i) => i !== 0);
//     if (index > -1) {
//       return l + 1 + index;
//     }
//     return -1;
//   };
//   let r = getR();

//   while (l < r) {
//     let t = nums[l];
//     nums[l] = nums[r];
//     nums[r] = t;

//     l = getL();
//     r = getR();
//   }
// };

var moveZeroes = function (nums) {
  let n = -1;
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    // 找到第一个0
    if (e === 0 && n < 0) {
      n = i;
    }

    if (e !== 0 && n > -1) {
      let t = nums[n];
      nums[n] = e;
      nums[i] = t;
      n++;
    }
  }
};
const arr = [0, 1, 0, 3, 12];
// 1 0 0 3 12
// 1 3 0 0 12
// const arr = [1, 3, 12, 0, 0];
moveZeroes(arr);
console.log("moveZeroes", arr);
