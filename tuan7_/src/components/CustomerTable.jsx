    import { DataTable } from 'primereact/datatable';
    import { Column } from 'primereact/column';
    import { Tag } from 'primereact/tag';
    import { Dialog } from 'primereact/dialog';
    import { InputText } from 'primereact/inputtext';
    import { Dropdown } from 'primereact/dropdown';
    import { Button } from 'primereact/button';
    import { Toast } from 'primereact/toast';
    import { useState, useRef, useEffect } from 'react';

    function CustomerTable({ customers, selectedRows, setSelectedRows, setCustomers }) {
        const [visible, setVisible] = useState(false);
        const [selectedCustomer, setSelectedCustomer] = useState(null);
        const [formData, setFormData] = useState({});
        const toast = useRef(null);

        const statusOptions = [
            { label: 'New', value: 'New' },
            { label: 'In Progress', value: 'In-progress' },
            { label: 'Completed', value: 'Completed' },
            { label: 'Cancelled', value: 'Cancelled' }
        ];

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
                    <button className='hover:!bg-blue-100' onClick={() => editProduct(rowData)}>
                        <img src="src/assets/create.png" alt="Edit" />
                    </button>
                </div>
            );
        };

        const editProduct = (product) => {
            setSelectedCustomer(product);

            setFormData({
                id: product.id,
                nameText: product.name?.text || '',
                avatar: product.name?.avatar || '',
                company: product.company,
                order_value: product.order_value,
                order_date: product.order_date,
                status: product.status,
            });

            setVisible(true);
        };

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSave = async () => {
            try {
                const updatedData = {
                    id: parseInt(formData.id),
                    name: {
                        text: formData.nameText,
                        avatar: formData.avatar
                    },
                    company: formData.company,
                    order_value: parseFloat(formData.order_value),
                    order_date: formData.order_date,
                    status: formData.status,
                };

                const response = await fetch(`http://localhost:3000/customers/${formData.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const updatedCustomer = await response.json();

                setCustomers(customers.map(customer =>
                    customer.id === updatedCustomer.id ? updatedCustomer : customer
                ));

                toast.current.show({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Customer updated successfully',
                    life: 3000
                });

                setVisible(false);
                setSelectedCustomer(null);
                setFormData({});
            } catch (error) {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.message || 'Failed to update customer.',
                    life: 3000
                });
            }
        };

        const footerContent = (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                <Button label="Save" icon="pi pi-check" onClick={handleSave} autoFocus />
            </div>
        );

        const nameBodyTemplate = (rowData) => {
            return (
                <div className="flex items-center space-x-2">
                    <img
                        src={rowData.name?.avatar}
                        alt={rowData.name?.text}
                        className="w-8 h-8 rounded-full"
                    />
                    <span>{rowData.name?.text}</span>
                </div>
            );
        };


        return (
            <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <img src="src/assets/File text 1.png" alt="Report Icon" />
                        <p className="font-bold text-xl">Detailed Report</p>
                    </div>
                    <div className="space-x-3 flex">
                        <button className="flex h-10 px-4 items-center space-x-2 border border-pink-500 hover:bg-gray-100 hover:text-gray-800">
                            <img className="h-4" src="src/assets/Download.png" alt="Import Icon" />
                            <p>Import</p>
                        </button>
                        <button className="flex h-10 px-4 items-center space-x-2 border border-pink-500 hover:bg-gray-100 hover:text-gray-800">
                            <img className="h-4" src="src/assets/Move up.png" alt="Export Icon" />
                            <p>Export</p>
                        </button>
                    </div>
                </div>

                <Toast ref={toast} />
                <DataTable
                    value={customers}
                    selectionMode="multiple"
                    selection={selectedRows}
                    onSelectionChange={(e) => setSelectedRows(e.value)}
                    dataKey="id"
                    paginator
                    rows={4}
                    rowsPerPageOptions={[4, 10, 20]}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                    <Column header="CUSTOMER NAME" body={nameBodyTemplate} />
                    <Column field="company" header="COMPANY" />
                    <Column field="order_value" header="ORDER VALUE" body={(rowData) => `$${rowData.order_value}`} />
                    <Column field="order_date" header="ORDER DATE" />
                    <Column field="status" header="STATUS" body={statusOrderBodyTemplate} sortable />
                    <Column body={actionBodyTemplate} exportable={false} />
                </DataTable>

                <Dialog
                    header="Edit Customer"
                    visible={visible}
                    style={{ width: '50vw' }}
                    onHide={() => setVisible(false)}
                    footer={footerContent}
                >
                    <div className="p-fluid space-y-3">
                        <div className="p-field">
                            <label htmlFor="nameText">Customer Name</label>
                            <InputText
                                id="nameText"
                                name="nameText"
                                value={formData.nameText || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="company">Company</label>
                            <InputText
                                id="company"
                                name="company"
                                value={formData.company || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="order_value">Order Value</label>
                            <InputText
                                id="order_value"
                                name="order_value"
                                value={formData.order_value || ''}
                                onChange={handleInputChange}
                                type="number"
                                required
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="order_date">Order Date</label>
                            <InputText
                                id="order_date"
                                name="order_date"
                                value={formData.order_date || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="status">Status</label>
                            <Dropdown
                                id="status"
                                name="status"
                                value={formData.status || ''}
                                options={statusOptions}
                                onChange={handleInputChange}
                                placeholder="Select a Status"
                                required
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }

    export default CustomerTable;
