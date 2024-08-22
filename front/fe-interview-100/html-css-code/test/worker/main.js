// main.js
const worker = new Worker("worker.js");

// 发送消息到 Worker
worker.postMessage(10);

// 监听来自 Worker 的消息
worker.onmessage = function (event) {
  console.log("Message received from worker:", event.data);
};

// 处理错误
worker.onerror = function (error) {
  console.error("Worker error:", error.message);
};
