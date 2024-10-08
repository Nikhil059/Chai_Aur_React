import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  // let myArr = [1,3,4]
  return (
    <>
      <h1 className='bg-green-400 p-4 text-white rounded-xl m-4'>Tailwind CSS</h1>
      <Card channel ="chaiaurcode" btnText = "Click Me"/>
    </>
  );
}

export default App;
