import { useEffect, useState } from 'react';
import CustomerTable from './CustomerTable';

function Content() {
    const [turnover, setTurnover] = useState({ value: 0, periodChange: 0 });
    const [profit, setProfit] = useState({ value: 0, periodChange: 0 });
    const [newCustomers, setNewCustomers] = useState({ value: 0, periodChange: 0 });
    const [selectedRows, setSelectedRows] = useState([]);
    const [customers, setCustomers] = useState([]);

    // Gọi API cho Turnover
    useEffect(() => {
        fetch("http://localhost:3000/turnover")
            .then(res => res.json())
            .then(json => setTurnover(json))
            .catch(error => console.log("Error fetching turnover:", error));
    }, []);

    // Gọi API cho Profit
    useEffect(() => {
        fetch("http://localhost:3000/profit")
            .then(res => res.json())
            .then(json => setProfit(json))
            .catch(error => console.log("Error fetching profit:", error));
    }, []);

    // Gọi API cho New Customers
    useEffect(() => {
        fetch("http://localhost:3000/new-customers")
            .then(res => res.json())
            .then(json => setNewCustomers(json))
            .catch(error => console.log("Error fetching new customers:", error));
    }, []);

    // Gọi API cho danh sách khách hàng (DataTable)
    useEffect(() => {
        fetch("http://localhost:3000/customers")
            .then(res => res.json())
            .then(json => setCustomers(json))
            .catch(error => console.log("Error fetching customers:", error));
    }, []);

    return (
        <div className="content p-3">
            <div className="h-40">
                <div className="flex space-x-2">
                    <img src="src/assets/Squares four 1.png" alt="Overview Icon" />
                    <p className="text-xl font-bold">Overview</p>
                </div>
                <div className="overview p-1 space-x-2 flex">
                    <div className="turnover flex bg-pink-100 p-3 justify-between w-1/3">
                        <div className="space-y-2">
                            <p className="font-bold">Turnover</p>
                            <p className="text-2xl font-bold">${turnover.value.toLocaleString()}</p>
                            <p>{turnover.periodChange > 0 ? '+' : ''}{turnover.periodChange}% period of change</p>
                        </div>
                        <div>
                            <img src="src/assets/Button 1509.png" alt="Turnover Icon" />
                        </div>
                    </div>
                    <div className="profit flex bg-blue-100 p-3 justify-between w-1/3">
                        <div className="space-y-2">
                            <p className="font-bold">Profit</p>
                            <p className="text-2xl font-bold">${profit.value.toLocaleString()}</p>
                            <p>{profit.periodChange > 0 ? '+' : ''}{profit.periodChange}% period of change</p>
                        </div>
                        <div>
                            <img src="src/assets/Button 1529.png" alt="Profit Icon" />
                        </div>
                    </div>
                    <div className="new_customer flex bg-blue-50 p-3 justify-between w-1/3">
                        <div className="space-y-2">
                            <p className="font-bold">New Customer</p>
                            <p className="text-2xl font-bold">{newCustomers.value}</p>
                            <p>{newCustomers.periodChange > 0 ? '+' : ''}{newCustomers.periodChange}% period of change</p>
                        </div>
                        <div>
                            <img src="src/assets/Button 1530.png" alt="New Customer Icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between pb-3">
                    <div className="flex">
                        <img src="src/assets/File text 1.png" alt="Report Icon" />
                        <p className="font-bold text-xl">Detailed Report</p>
                    </div>
                    <div className="space-x-3 flex">
                        <button className="flex h-10 w-25 items-center space-x-2 !border !border-pink-500 justify-center hover:!bg-gray-100 hover:!text-gray-800">
                            <img className="h-4" src="src/assets/Download.png" alt="Import Icon" />
                            <p>Import</p>
                        </button>
                        <button className="flex h-10 w-25 items-center space-x-2 !border !border-pink-500 justify-center hover:!bg-gray-100 hover:!text-gray-800">
                            <img className="h-4" src="src/assets/Move up.png" alt="Export Icon" />
                            <p>Export</p>
                        </button>
                    </div>
                </div>
                <CustomerTable
                    customers={customers}
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                    setCustomers={setCustomers}
                />
            </div>
        </div>
    );
}

export default Content;