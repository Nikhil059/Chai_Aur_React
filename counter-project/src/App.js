import './App.css';

function App() {
let counterValue = 5;
const AddValue = () =>{
  counterValue = counterValue + 1;
  console.log(counterValue);
  
  
}
  return (
    <>
        <h1>Chai aur React</h1>
        <h2>Counter value : {counterValue}</h2>
        <br/>
        <button onClick={AddValue}>Add value</button><br/>
        <button>Remove value</button>
    </>
  );
}

export default App;
