import CustomerTable from './CustomerTable';
import Overview from './Overview';
import { useState, useEffect } from 'react';

function Content() {
    const [customers, setCustomers] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/customers')
            .then((res) => res.json())
            .then((data) => setCustomers(data))
            .catch((error) => console.error('Error fetching customers:', error));
    }, []);
    console.log("Customers:", customers);

    return (
        <div className="content p-3">
            <div className="h-40">
                <Overview />
            </div>
            <CustomerTable
                customers={customers}
                setCustomers={setCustomers}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
            />
        </div>
    );
}

export default Content;
