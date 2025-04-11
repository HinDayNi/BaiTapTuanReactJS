import Menu from './components/Menu'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <>
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
