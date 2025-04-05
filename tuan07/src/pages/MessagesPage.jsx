import Menu from "../components/Menu"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { useEffect, useState } from 'react';
function MessagesPage() {
    const [rowClick, setRowClick] = useState(false);
    const [turnover, setTurnover] = useState({ value: 0, periodChange: 0 });
    const [profit, setProfit] = useState({ value: 0, periodChange: 0 });
    const [newCustomers, setNewCustomers] = useState({ value: 0, periodChange: 0 });
    const [selectedRows, setSelectedRows] = useState([]);
    const [customers, setCustomers] = useState([]); // Dữ liệu cho DataTable
    // Gọi API cho Turnover
    useEffect(() => {
        fetch("http://localhost:3000/turnover")
            .then(res => res.json())
            .then(json => {
                console.log("Turnover API:", json);
                setTurnover(json);
            })
            .catch(error => console.log("Error fetching turnover:", error));
    }, []);
    // Gọi API cho Profit
    useEffect(() => {
        fetch("http://localhost:3000/profit")
            .then(res => res.json())
            .then(json => {
                console.log("Profit API:", json);
                setProfit(json);
            })
            .catch(error => console.log("Error fetching profit:", error));
    }, []);
    // Gọi API cho New Customers
    useEffect(() => {
        fetch("http://localhost:3000/new-customers")
            .then(res => res.json())
            .then(json => {
                console.log("New Customers API:", json);
                setNewCustomers(json);
            })
            .catch(error => console.log("Error fetching new customers:", error));
    }, []);

    // Gọi API cho danh sách khách hàng (DataTable)
    useEffect(() => {
        fetch("http://localhost:3000/customers")
            .then(res => res.json())
            .then(json => {
                console.log("Customers API:", json);
                setCustomers(json);
            })
            .catch(error => console.log("Error fetching customers:", error));
    }, []);

    const statusOrderBodyTemplate = (rowData) => {
        const statusMap = {
            "New": { label: "New", severity: "info" },
            "In-progress": { label: "In Progress", severity: "warning" },
            "Completed": { label: "Completed", severity: "success" },
            "Cancelled": { label: "Cancelled", severity: "danger" }
        };

        const status = statusMap[rowData.status] || { label: rowData.status, severity: "secondary" };

        return <Tag value={status.label} severity={status.severity} />;
    };

    // Hàm tính tổng Order Value cho Turnover
    const calculateTurnover = (data) => {
        return Math.round(data?.reduce((total, item) => total + (item.order_value || 0), 0)) || 0;
    };

    // Hàm tính tổng Profit (ví dụ: giả sử Profit là 75% Order Value)
    const calculateProfit = (data) => {
        return Math.round(data?.reduce((total, item) => total + (item.order_value * 0.75 || 0), 0)) || 0;
    };

    // Hàm đếm số lượng New Customers (ví dụ: đếm số lượng hàng được chọn)
    const calculateNewCustomersCount = (selected) => {
        return selected?.length || 0;
    };


    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex">
                <button
                    className='hover:!bg-blue-100'
                    onClick={() => editProduct(rowData)}
                >
                    <img src="src/assets/create.png" alt="" />
                </button>
            </div>
        );
    };
    const editProduct = (product) => {
        console.log("Chỉnh sửa sản phẩm:", product);
    };
    return (
        <>
            <div className="content p-3">
                <div className="h-40">
                    <div className="flex space-x-2">
                        <img src="src/assets/Squares four 1.png" alt="Overview Icon" />
                        <p className="text-xl font-bold">Overview</p>
                    </div>
                    <div className="overview p-1 space-x-2 flex overview-container">
                        <div className="turnover flex bg-pink-100 p-3 justify-between">
                            <div className="space-y-2">
                                <p className="font-bold">Turnover</p>
                                <p className="text-2xl font-bold">${calculateTurnover(customers).toLocaleString()}</p>
                                <p>{turnover.periodChange > 0 ? '+' : ''}{turnover.periodChange}% period of change</p>
                            </div>
                            <div>
                                <img src="src/assets/Button 1509.png" alt="Turnover Icon" />
                            </div>
                        </div>
                        <div className="profit flex bg-blue-100 p-3 justify-between">
                            <div className="space-y-2">
                                <p className="font-bold">Profit</p>
                                <p className="text-2xl font-bold">${calculateProfit(customers).toLocaleString()}</p>
                                <p>{profit.periodChange > 0 ? '+' : ''}{profit.periodChange}% period of change</p>
                            </div>
                        </div>
                        <div>
                            <img src="src/assets/Button 1529.png" alt="Profit Icon" />
                        </div>
                    </div>
                    <div className="new_customer flex bg-blue-50 p-3 justify-between">
                        <div className="space-y-2">
                            <p className="font-bold">New customer</p>
                            <p className="text-2xl font-bold">{calculateNewCustomersCount(selectedRows)}</p>
                            <p>{newCustomers.periodChange > 0 ? '+' : ''}{newCustomers.periodChange}% period of change</p>
                        </div>
                        <div>
                            <div>
                                <img src="src/assets/Button 1530.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}
export default MessagesPage    