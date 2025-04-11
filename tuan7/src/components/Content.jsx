// import CustomerTable from './CustomerTable';
// import Overview from './Overview';
// import { Routes, Route } from 'react-router-dom'
// import ProjectsPage from '../pages/ProjectsPage';
// import AnalyticsPage from '../pages/AnalyticsPage';
// import TeamsPage from '../pages/TeamsPage';
// import MessagesPage from '../pages/MessagesPage';
// import IntegrationsPage from '../pages/IntegrationsPage';
// import { useState, useEffect } from 'react';

function Content() {
    //     const [customers, setCustomers] = useState([]);
    //     const [selectedRows, setSelectedRows] = useState([]);

    //     useEffect(() => {
    //         fetch('http://localhost:3000/customers')
    //             .then((res) => res.json())
    //             .then((data) => setCustomers(data))
    //             .catch((error) => console.error('Error fetching customers:', error));
    //     }, []);
    //     console.log("Customers:", customers);

    return (
        <div className="content p-3">
            {/* <div className="h-40">
                <Overview />
            </div>
            <Routes>
                <Route path='/' element={
                    <CustomerTable
                        customers={customers}
                        setCustomers={setCustomers}
                        selectedRows={selectedRows}
                        setSelectedRows={setSelectedRows}
                    />}
                />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/analytics' element={<AnalyticsPage />} />
                <Route path='/messages' element={<MessagesPage />} />
                <Route path='/integrations' element={<IntegrationsPage />} />
            </Routes> */}
        </div>
    );
}

export default Content;
