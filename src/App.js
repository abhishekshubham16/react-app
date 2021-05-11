import React, {useState} from 'react';
import Child from './components/Child';
import Parent from './components/Parent';

let App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(newTime);
  const red = '#FF0000';
  const[bg, setbg]=useState(red);
  const[name, setname] = useState('click me');

  const updateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateTime,1000)

  const bgchange = () =>{
    let newbg = '#34495e';
    setbg(newbg);
    setname('Ouch!! :')
  }

  const bgback = () => {
    setbg(red);
    setname('Change!:')
  }
  return(
    <>
      <Parent/>
      <Child/>
      <h1>{ctime}</h1>
      {/* <button onClick={updateTime}>get time</button> */}
      <div style={{backgroundColor : bg}}>
        <button onClick={bgchange} onDoubleClick={bgback}> {name} </button>
      </div>
    </>
  )
}



export default App;


