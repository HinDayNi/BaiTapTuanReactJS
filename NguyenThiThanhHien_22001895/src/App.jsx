import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Heder'
import MenuList from './component/MenuList'
import Footer from './component/Footer'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Contact from './component/BookTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="flex justify-between p-5">
            <Header/>
                <main className="flex-grow">
                    <Routers>
                        <Route path="/" element={<Home/>}  />
                        <Route path="/memu" element={<Menu menu={menu}/>}  />
                        <Route path="/contact" element={<Contact/>}  />
                    </Routers>
                    <Contact/>
                    <Home/>
                    <Menu/>
                    <MenuList/>
                </main>
            <Footer/>
        </div>
    </>
  )
}

export default App
