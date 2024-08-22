// 切换字母大小写;
const switchLetterCase = (str) => {
  const reg1 = /[a-z]/;
  const reg2 = /[A-Z]/;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (reg1.test(s)) {
      res += s.toLocaleUpperCase();
    } else if (reg2.test(s)) {
      res += s.toLocaleLowerCase();
    } else {
      res += s;
    }
  }
  return res;
};
const str = "100aBcD$#xYz";
console.info(switchLetterCase(str));
