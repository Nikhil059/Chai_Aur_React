import { useState } from 'react';
import './App.css';

function App() {
// let counterValue = 5;
const AddValue = () =>{
  if(counterValue == 20)
    {
      setcounterValue(counterValue = 20)
    } 
    else{
      // counterValue = counterValue + 1;
      // counterValue = counterValue + 1;
      // counterValue = counterValue + 1;
      setcounterValue(prevCounter => prevCounter + 1)
      setcounterValue(prevCounter => prevCounter + 1)
      setcounterValue(prevCounter => prevCounter + 1)
      // setcounterValue(counterValue + 1)
      // setcounterValue(counterValue + 1)
  console.log(counterValue);
    }
}

const DeleteValue = () => {
  if(counterValue == 0)
  {
    setcounterValue(counterValue = 0)
  }
  else{
    counterValue = counterValue - 1;
  setcounterValue(counterValue)
  console.log(counterValue);
  }
}
let [counterValue,setcounterValue] = useState(10);
  return (
    <>
        <h1>Chai aur React</h1>
        <h2>Counter value : {counterValue}</h2>
        <br/>
        <button onClick={AddValue}>Add value</button><br/>
        <button onClick={DeleteValue}>Remove value</button>
    </>
  );
}

export default App;
