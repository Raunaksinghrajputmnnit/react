import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|:;'<>,.?/~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

 const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
 },[password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
  
      <div className="w-150 shadow-md rounded-lg px-6 py-6 bg-blue-700">
  
        {/* Title */}
        <h4 className="text-white text-center text-xl font-semibold mb-6">
          Password Generator
        </h4>
  
        {/* Password Box and Copy Button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="w-full py-2 px-3 bg-white text-gray-900 outline-none"
              placeholder="Your password"
              readOnly
              ref={passwordRef}
            />
            <button
             onClick={copyPasswordToClipboard}
                className='outline-none bg-blue-500 text-white px-3 py-2 shrink-0 hover:bg-blue-600 transition'
            >
                Copy
            </button>
        </div>
        
        {/* Controls (Length Slider) */}
        <div className='flex text-sm text-white gap-x-2 mt-2'>
            
            {/* Length Control Group */}
            <div className='flex items-center gap-x-1'>
                <input
                    type="range"
                    min={6}
                    max={100}
                    value={length} 
                    className='cursor-pointer'
                    onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input
                    type="checkbox"
                   defaultChecked={numberAllowed}
                   id="numberInput"
                    onChange={(e)=>{setNumberAllowed((prev)=>!prev);}}
                />
                <label htmlFor="numberInut">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input
                    type="checkbox"
                   defaultChecked={charAllowed}
                   id="charcaterInput"
                    onChange={()=>{setCharAllowed((prev)=>!prev);}}
                />
               <label htmlFor="characterInputp">Characters</label>
            </div>
        </div>
        
        {
        }
      </div>
    </div>
  );
} 

export default App