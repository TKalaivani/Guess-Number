
import { useState } from 'react';
import './App.css';
import Result from './Result';
const secreteNumber=Math.floor(Math.random()*10)+1
function App() {

  const [num,setNum]=useState(" ")
  const handlenum=(e)=>{
    
    setNum(e.target.value)
  }
  console.log(num)
  return (

   <div className='container'> 
   <div className='head'>
   <label htmlFor='num'>Guess Number from 1 to 10 : {secreteNumber}</label>
   </div>
       <input type='text' id="num" name="num" onChange={handlenum}/>
       <Result secreteNumber={secreteNumber}  num={num}/>
   </div>
  );
}

export default App;
