import React, {useState} from 'react';
import Child from './components/Child';
import Parent from './components/Parent';

let App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(newTime);

  const updateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateTime,1000)
  return(
    <>
      <Parent/>
      <Child/>
      <h1>{ctime}</h1>
      {/* <button onClick={updateTime}>get time</button> */}
    </>
  )
}



export default App;


