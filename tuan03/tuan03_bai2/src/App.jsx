import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LaiSuat from './components/LaiSuat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LaiSuat/>
      </div>
       
    </>
  )
}

export default App
