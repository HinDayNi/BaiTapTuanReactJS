
import Overview from './Overview';
import { Routes, Route } from 'react-router-dom'
import ProjectsPage from '../pages/ProjectsPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import TeamsPage from '../pages/TeamsPage';
import MessagesPage from '../pages/MessagesPage';
import IntegrationsPage from '../pages/IntegrationsPage';

function Content() {

    return (
        <div className="content p-3">
            <div className="h-40">
                <Overview />
            </div>
            <Routes>
                {/* <Route path='/' element={<Content />} /> */}
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/analytics' element={<AnalyticsPage />} />
                <Route path='/messages' element={<MessagesPage />} />
                <Route path='/integrations' element={<IntegrationsPage />} />
            </Routes>
        </div>
    );
}

export default Content;
