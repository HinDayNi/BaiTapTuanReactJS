import React, { useState } from 'react'
import './App.css'
import Header, {menuList} from './components/Header'
import MenuList from './components/MenuList'
import BookTable from './components/BookTable'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Provider from './stores/MenuContext'


function App() {
  return (
    <>
      <Provider>
        <Header/>
        <Routes>
             {menuList.map((menu, index) => (
              <Route key={index} path={menu.to} element={React.createElement(menu.tagName)}></Route>
             ))}
              <Route path="/book" element={<BookTable/>}></Route>
          </Routes>
        <Footer/>
      </Provider>
    </>
  )
}

export default App
