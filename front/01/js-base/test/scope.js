// 创建 10 个 li 元素
const ul = document.getElementById('myList');

// for (var i = 0; i < 10; i++) {
//     const li = document.createElement('li');
//     li.textContent = `Item ${i + 1}`;
//     li.dataset.index = i; // 保存索引
//     li.addEventListener('click', function() {
//         // alert(`Clicked item index: ${this.dataset.index}`);
//         alert(`Clicked item index: ${i}`);
//     });
//     ul.appendChild(li);
// }

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i + 1}`;
    li.addEventListener('click', function() {
        alert(`Clicked item index: ${i}`); // 闭包问题
    });
    ul.appendChild(li);
}