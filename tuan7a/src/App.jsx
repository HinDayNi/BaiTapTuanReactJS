import Menu from './components/Menu'
import Header from './components/Header'
import Content from './components/Content'
import { Routes, Route } from 'react-router-dom'
import { menuList } from './components/Menu'
function App() {
  return (
    <>
      <div className='container'>
        <Menu />
        <Header />
        <Routes>
          {menuList.map((item, index) => (
            <Route key={index} path={item.link} element={React.createElement(item.tagName)}></Route>
          ))}
        </Routes>
        <Content />
      </div>
    </>
  )
}

export default App
