// 反转单向链表
const arrayToLink = (arr) => {
  const head = {
    value: arr[0],
    next: null,
  };
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = {
      value: arr[i],
      next: null,
    };
    cur = cur.next;
  }
  return head;
};

// const arrayToLink = (arr) => {
//   let head = {
//     value: arr[arr.length - 1],
//     next: null,
//   };
//   for (let i = arr.length - 2; i >= 0; i--) {
//     head = {
//       value: arr[i],
//       next: head,
//     };
//   }
//   return head;
// };

const arr = [100, 200, 300, 400, 500];
const link = arrayToLink(arr);
console.info("arrayToLink", link);

const reverseLink = (link) => {
  let cur = link;
  let prev = null;
  let next = null;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
// reverseLink(link);
// console.log("reverseLink", reverseLink(link));

function reverseLinkList(listNode) {
  // 定义三个指针
  let prevNode = undefined;
  let curNode = undefined;
  let nextNode = listNode;

  // 以 nextNode 为主，遍历链表
  while (nextNode) {
    // 第一个元素，删掉 next ，防止循环引用
    if (curNode && !prevNode) {
      delete curNode.next;
    }

    // 反转指针
    if (curNode && prevNode) {
      curNode.next = prevNode;
    }

    // 整体向后移动指针
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }

  // 最后一个的补充：当 nextNode 空时，此时 curNode 尚未设置 next
  curNode.next = prevNode;

  return curNode;
}

console.log("reverseLink", reverseLinkList(link));
