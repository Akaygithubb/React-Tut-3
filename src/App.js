import { useState,useMemo } from 'react';
import './App.css';

const generateId=()=>{

  const str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result="";
  for (let i= 0;i < 35;i++) {
   const randomnumber=~~(Math.random()*52)
   result+=str[randomnumber]
  }
  return result
}

function App() {
  // const id=useMemo(()=>{
  //   return Math.random()*23
  // },[])
  //* memoization is a technique in javascript in which we catch or temporarily store a value in order to prevent un necessary calculation during heavy functions in case of same input
  //* usememo is based on same concept of memoization
  //* usememo returns memoiaze value


  //todo usecallback and usememo are similar fx only diff is that usememo returms a memoize value where as usecalback returns a memoiaze function 

  //* usecallback takes whole function code as reference
 
  const [show,setShow]=useState(false)
  const[val,setVal]=useState("")
  const randomid=useMemo(generateId,[]);
  return (
    <div className="App">
      <h1
        style={{fontWeight:"100",letterSpacing:2}}>
        #{randomid}
      </h1>
      
      <input type={'text'} value={val} onChange={(e)=>setVal(e.target.value)} placeholder={"text.."}></input>


    <button onClick={()=>setShow((prev)=>!prev)}>
      { show ? "Hide":"Reveal"}
      </button>
      <p>{show?"some api key":"**********"}</p>
    </div>
  );
}

export default App;
