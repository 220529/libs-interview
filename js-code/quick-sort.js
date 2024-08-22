const quickSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const next = arr[j];
      if (cur > next) {
        const tamp = cur;
        arr[i] = next;
        arr[j] = tamp;
      }
    }
  }
  return arr;
};

const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5];
// console.info(quickSort(arr1));

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       const cur = arr[j];
//       const next = arr[j + 1];
//       if (cur > next) {
//         const tamp = next;
//         arr[j + 1] = cur;
//         arr[j] = tamp;
//       }
//     }
//   }
//   return arr;
// }

const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  const middle = arr[middleIndex];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item < middle) {
      left.push(item);
    } else if (item > middle) {
      right.push(item);
    }
  }

  return [...bubbleSort(left), middle, ...bubbleSort(right)];
};

// 示例使用
const arr = [64, 33, 24, 10, 100, 50, 5];
// console.log("Original array: ", arr);
console.log("Sorted array: ", bubbleSort(arr));
