import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { useEffect, useState } from 'react';
function Content() {
    const [rowClick, setRowClick] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const products = selectedProducts;
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        setSelectedProducts(selectedRows);
    }, [selectedRows]);
    useEffect(() => {
        fetch("http://localhost:3000/customers")
            .then(res => res.json())
            .then(json => {
                console.log("Dữ liệu từ API:", json);
                setSelectedProducts(json);
            })
            .catch(error => console.log(error));
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
                        <img src="src/assets/Squares four 1.png" alt="" />
                        <p className="text-xl font-bold">Overview</p>
                    </div>
                    <div className="overview p-1 space-x-2">
                        <div className="turnover flex bg-pink-100 p-3 justify-between">
                            <div className="space-y-2">
                                <p className="font-bold">Turnover</p>
                                <p className="text-2xl font-bold">${Math.round(selectedProducts?.reduce((total, item) => total + (item.order_value || 0), 0)).toLocaleString()}</p>
                                <p>5,39% perilod of change</p>
                            </div>
                            <div>
                                <div>
                                    <img src="src/assets/Button 1509.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="profit flex bg-blue-100 p-3 justify-between">
                            <div className="space-y-2">
                                <p className="font-bold">Profit</p>
                                <p className="text-2xl font-bold">${Math.round(selectedProducts?.reduce((total, item) => total + (item.order_value || 0) * 0.75, 0)).toLocaleString()}</p>
                                <p>5,39% perilod of change</p>
                            </div>
                            <div>
                                <div>
                                    <img src="src/assets/Button 1529.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="new_customer flex bg-blue-50 p-3 justify-between">
                            <div className="space-y-2">
                                <p className="font-bold">New customer</p>
                                <p className="text-2xl font-bold">{selectedProducts?.length || 0}</p>
                                <p>6.84% perilod of change</p>
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
                    <div className="flex items-center justify-between pb-3">
                        <div className="flex">
                            <img src="src/assets/File text 1.png" alt="" />
                            <p className="font-bold text-xl">Detailed report</p>
                        </div>
                        <div className="space-x-3 flex">
                            <button className="flex h-10 w-25 items-center space-x-2 !border !border-pink-500 justify-center hover:!bg-gray-100 hover:!text-gray-800">
                                <img className="h-4" src="src/assets/Download.png" alt="" />
                                <p>Import</p>
                            </button>
                            <button className="flex h-10 w-25 items-center space-x-2s !border !border-pink-500 justify-center hover:!bg-gray-100 hover:!text-gray-800">
                                <img className="h-4" src="src/assets/Move up.png" alt="" />
                                <p>Export</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <DataTable
                            value={products}
                            selectionMode={rowClick ? null : 'checkbox'}
                            selection={selectedRows}
                            onSelectionChange={(e) => setSelectedProducts(e.value)}
                            dataKey="id"
                            tableStyle={{ minWidth: '50rem' }}
                            paginator
                            rows={4}
                            rowsPerPageOptions={[4, 10, 20]}
                        >
                            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                            <Column field="name" header="CUSTOMER NAME"></Column>
                            <Column field="company" header="COMPANY"></Column>
                            <Column field="order_value" header="ORDER VALUE"></Column>
                            <Column field="order_date" header="ORDER DATE"></Column>
                            <Column field="status" header="STATUS" body={statusOrderBodyTemplate} sortable></Column>
                            <Column body={actionBodyTemplate} exportable={false}></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content;