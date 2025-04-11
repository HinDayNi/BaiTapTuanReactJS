import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Content />
      </main>
      <Footer />
    </div>
  )
}

export default App
