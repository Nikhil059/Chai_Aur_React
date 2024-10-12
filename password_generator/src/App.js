import { useCallback, useState } from 'react';
import './App.css';

function App() {

  const[length,setLength] = useState(8);
  const[number,setNumber] = useState(false);
  const[character,setCharacter] = useState(false);
  const[password,setPassword] = useState();

  const passwordGenerator = useCallback( () => {
    pass = ""
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*(){}[]`~-_+="

    
  },[lenght,number,character,setPassword])
  return (
    <>
      <h1 className='text-center text-white text-4xl m-4'>Password Generator</h1>
    </>
  );
}

export default App;
