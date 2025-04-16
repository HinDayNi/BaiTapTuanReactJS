    import React from 'react';
    import './App.css'
    import Content from './components/Content'
    import Header from './components/Header'
    import Footer from './components/common/Footer'

    function App() {

      return (
        <div className="flex flex-col">
          <Header />
          <main className="flex-1">
            <Content />
          </main>
          <Footer />
        </div>
      )
    }

    export default App
