// 旋转数组 k 步
const arr = [1, 2, 3, 4, 5, 6, 7];

const rotate = (arr, num) => {
  for (let index = 0; index < num; index++) {
    const end = arr.pop();
    arr.unshift(end);
  }
  return arr;
};

// const arr1 = rotate(arr, 4);
// console.log("arr1", arr1);

const rotate2 = (arr, num) => {
  const len = num % arr.length;
  const left = arr.slice(0, arr.length - len);
  const right = arr.slice(-len);
  return right.concat(left);
};

const arr2 = rotate2(arr, 13);
console.log("arr2", arr2);
