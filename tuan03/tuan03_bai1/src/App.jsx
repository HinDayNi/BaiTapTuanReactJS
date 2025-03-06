import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Filters from './components/Filters'
import SearchNotFound from './components/SearchNotFound'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Filters/> */}
      <SearchNotFound/>
      <Footer/>
    </>
  )
}

export default App
