const bst = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

// 前序遍历
const l = (tree) => {
  if (!tree) {
    return;
  }
  console.log("tree", tree.value);
  l(tree.left);
  l(tree.right);
};

l(bst);
