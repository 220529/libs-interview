// worker.js
self.onmessage = function (event) {
  // 接收到来自主线程的消息
  console.log("Message received from main script:", event.data);
  // 执行任务
  const result = event.data * 2;
  // 发送结果回主线程
  self.postMessage(result);
};

console.log("worker", document);
