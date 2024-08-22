const p = document.createElement("p");
p.innerHTML = "new paragraph";
document.body.appendChild(p);
const list = document.getElementsByTagName("p");
console.log("length----", list.length);

console.log("start");
// 渲染之后
setTimeout(() => {
  const list = document.getElementsByTagName("p");
  console.log("length on timeout----", list.length); // 2
  alert("阻塞 timeout");
});
// 渲染之前
Promise.resolve().then(() => {
  const list = document.getElementsByTagName("p");
  console.log("length on promise.then----", list.length); // 2
  alert("阻塞 promise");
});
console.log("end");
