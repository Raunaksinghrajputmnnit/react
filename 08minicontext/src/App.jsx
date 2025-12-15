import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Vishu  is my gf ❤️ i love her so much</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
