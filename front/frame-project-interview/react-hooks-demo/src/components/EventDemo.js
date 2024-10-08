import React, { useState } from "react";

function EventDemo() {
  // 数组的解构
  // useState 就是一个 Hook “钩”，最基本的一个 Hook
  const [count, setCount] = useState(0); // 传入一个初始值

  const [name, setName] = useState("双越老师");

  // const arr = useState(0)
  // const count = arr[0]
  // const setCount = arr[1]

  function clickHandler() {
    setCount(count + 1);
    setName(name + "2020");
  }

  const handler = e => {
    console.log("handler", e);
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    console.log("e.nativeEvent", e.nativeEvent);
    e.stopPropagation()
  }
  return (
    <div onClick={handler}>
      <p>
        你点击了 {count} 次 {name}
      </p>
      <button onClick={clickHandler}>点击</button>
    </div>
  );
}

export default EventDemo;
