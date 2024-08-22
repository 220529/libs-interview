// 括号匹配
const str = "{a(b[c]d)e}f";

const obj = {
  "{": "}",
  "[": "]",
  "(": ")",
};
const left = "{([";
const right = "})]";

const matchBracket = (str) => {
  const stack = [];
  for (let index = 0; index < str.length; index++) {
    const e = str[index];
    if (left.indexOf(e) > -1) {
      stack.push(e);
    } else if (right.indexOf(e) > -1) {
      const tamp = stack[stack.length - 1];
      const val = obj[tamp];
      if (val === e) {
        stack.pop();
      }
    }
  }
  return !stack.length;
};

const str1 = "{a(b[c]d)e}f";
const str2 = "{a(b[(c]d)e}f";
const str3 = "{a(b[c]d}e)f";

console.info(str1, matchBracket(str1));
console.info(str2, matchBracket(str2));
console.info(str3, matchBracket(str3));
