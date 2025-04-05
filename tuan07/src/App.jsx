import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/menu'
import Content from './components/Content'

function App() {

  return (
    <>
      <div className="container">
                <div className="header">
                    <Header/>
                </div>
                <div className="menu">
                    <Menu/>
                </div>
                <div className="content">
                  <Content/>   
                </div>
                <div className="footer">
                    <h4>Footer</h4>
                </div>
            </div>
    </>
  )
}

export default App
