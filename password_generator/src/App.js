import { useState } from 'react';
import './App.css';

function App() {

  const[length,setLength] = useState(8);
  const[number,setNumber] = useState(false);
  const[character,setCharacter] = useState(false);
  const[password,setPassword] = useState();
  return (
    <>
      <h1 className='text-center text-white text-4xl m-4'>Password Generator</h1>
    </>
  );
}

export default App;
