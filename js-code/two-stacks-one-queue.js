// 两个栈，一个队列

class Queue {
  stack1 = [];
  stack2 = [];

  add(e) {
    this.stack1.push(e);
  }

  pop() {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    const result = this.stack2.pop();
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
    return result;
  }

  get length() {
    return this.stack1.length;
  }
}

const q = new Queue();
q.add(100);
q.add(200);
q.add(300);
console.info(q.length);
console.info(q.pop());
