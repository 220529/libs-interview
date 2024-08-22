// 二分查找;
// const binarySearch = (arr, value) => {
//   let result = -1;
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
//     const tamp = arr[middle];
//     if (value > tamp) {
//       left = middle + 1;
//     } else if (value < tamp) {
//       right = middle - 1;
//     } else {
//       return middle;
//     }
//   }
//   return result;
// };

const binarySearch = (arr, value, start = 0, end = arr.length - 1) => {
  const middleIndex = Math.floor((start + end) / 2);
  const target = arr[middleIndex];
  if (value > target) {
    return binarySearch(arr, value, middleIndex + 1, end);
  } else if (value < target) {
    return binarySearch(arr, value, start, middleIndex - 1);
  } else {
    return middleIndex;
  }
};

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
const target = 40;
console.info(binarySearch(arr, target));
