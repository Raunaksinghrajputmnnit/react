import { useState } from "react";

function App() {
  const [color,setColor]=useState("olive")
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="px-6 py-3 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>

<button
  className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "green" }}
  onClick={() => setColor("green")}
>Green</button>

<button
  className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "blue" }}
  onClick={() => setColor("blue")}
>Blue</button>

<button
  className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "yellow", color:"black" }}
  onClick={() => setColor("yellow")}
>Yellow</button>

<button
  className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "purple" }}
  onClick={() => setColor("purple")}
>Purple</button>

<button
  className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "orange" }}
  onClick={() => setColor("orange")}
>Orange</button>

<button
  className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "pink" }}
  onClick={() => setColor("pink")}
>Pink</button>

<button
  className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "black" }}
  onClick={() => setColor("black")}
>Black</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
