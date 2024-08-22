// 定义回调函数
function handleResponse(data) {
  console.log("Received data:", data);
//   document.getElementById("result").textContent = JSON.stringify(data);
}

// 创建 JSONP 请求
function fetchData() {
  const script = document.createElement("script");
  script.src = "/01/js-web-api/test/data.js?callback=handleResponse"; // 服务器端应返回 handleResponse({ ... })
  document.body.appendChild(script);
}

fetchData()