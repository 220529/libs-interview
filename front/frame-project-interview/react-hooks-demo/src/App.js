import React, { useState } from 'react';
// import ClickCounter from './components/ClickCounter'
// import LifeCycles from './components/LifeCycles'
// import FriendStatus from './components/FriendStatus'
// import UseRefDemo from './components/UseRefDemo'
// import UseContextDemo from './components/UseContextDemo'
// import UseReducerDemo from './components/UseReducerDemo'
// import UseMemoDemo from './components/UseMemoDemo'
// import UseCallbackDemo from './components/UseCallbackDemo'
// import CustomHookUsage from './components/CustomHookUsage'
// import Teach from './components/Teach'
// import UseStateTrap from './components/UseStateTrap'
// import UseEffectChangeState from './components/UseEffectChangeState'
// import SCUDemo2 from './components/SCUDemo2'
// import EventDemo from './components/EventDemo'
import EventDemo from './components/Event'

function App() {
  const [flag, setFlag] = useState(true)
  const [id, setId] = useState(1)

  return (
    <div>
      {/* <p>React Hooks 示例（双越老师）</p> */}
      <div>
        <button onClick={() => setFlag(false)}>flag = false</button>
        <button onClick={() => setId(id + 1)}>id++</button>
      </div>

      <hr></hr>
      {/* <ClickCounter/> */}
      {/* {flag && <LifeCycles/>} */}
      {/* {flag && <FriendStatus friendId={id}/>} */}
      {/* <UseRefDemo/> */}
      {/* <UseContextDemo/> */}
      {/* <UseReducerDemo/> */}
      {/* <UseMemoDemo/> */}
      {/* <UseCallbackDemo/> */}
      {/* {flag && <CustomHookUsage/>} */}
      {/* <Teach couseName="《前端框架面试课3》"/> */}
      {/* <UseStateTrap/> */}
      {/* <UseEffectChangeState/> */}
      {/* <SCUDemo2 /> */}
      {/* <EventDemo /> */}
    </div>
  );
}

export default App;
