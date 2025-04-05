import Menu from './components/Menu'
import Header from './components/Header'
import Content from './components/Content'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './components/Content'
import ProjectsPage from './pages/ProjectsPage';
import TeamsPage from './pages/TeamsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import MessagesPage from './pages/MessagesPage';
import IntegrationsPage from './pages/IntegrationsPage';

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
