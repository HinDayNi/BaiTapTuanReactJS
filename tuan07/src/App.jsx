import Menu from './components/Menu'
import Header from './components/Header'
import Content from './components/Content'
import { useState } from 'react';


function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
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
          <Content
            customers={customers}
            setCustomers={setCustomers}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows} />
        </div>
      </div>
    </>
  )
}

export default App
