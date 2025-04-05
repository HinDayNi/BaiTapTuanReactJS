import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import MayTinh from './components/MayTinh'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List/>
      <MayTinh/>
    </>
  )
}

export default App
