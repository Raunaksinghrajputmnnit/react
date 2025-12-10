import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter]=useState(15)
    //let counter=15;
    const addValue=()=>{
      console.log("clicked",Math.random())
     counter=counter+1;
     setCounter(counter>20?20:counter)
    }
    const removeValue=()=>{
      setCounter( (counter-1)<=0?0:counter-1)
    }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2> Counter value:{counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>
     <br/>
     <button
     onClick={removeValue}
     >remove value</button>
     <br></br>
    </>
  )
}

export default App
