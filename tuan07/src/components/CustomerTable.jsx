import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useState, useRef } from 'react';

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
                    <img src="src/assets/create.png" alt="" />
                </button>
            </div>
        );
    };

    const editProduct = (product) => {
        setSelectedCustomer(product);
        setFormData({ ...product });
        setVisible(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            if (!formData.id || !formData.name || !formData.company || !formData.order_value || !formData.order_date || !formData.status) {
                throw new Error("All fields are required.");
            }

            const updatedData = {
                id: parseInt(formData.id),
                name: formData.name,
                company: formData.company,
                order_value: parseFloat(formData.order_value),
                order_date: formData.order_date,
                status: formData.status,
            };

            console.log("Dữ liệu gửi lên API:", updatedData);

            // Gửi yêu cầu API
            const response = await fetch(`http://localhost:3000/customers/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedCustomer = await response.json();

            setCustomers(customers.map(customer =>
                customer.id === updatedCustomer.id ? updatedCustomer : customer
            ));

            // Hiển thị thông báo thành công
            toast.current.show({
                severity: 'success',
                summary: 'Success',
                detail: 'Customer updated successfully',
                life: 3000
            });

            // Đóng modal
            setVisible(false);
            setSelectedCustomer(null);
            setFormData({});
        } catch (error) {
            console.error("Error updating customer:", error);
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: error.message || 'Failed to update customer. Please try again.',
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

    return (
        <div>
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
                <Column field="name" header="CUSTOMER NAME" />
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
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="name">Customer Name</label>
                        <InputText
                            id="name"
                            name="name"
                            value={formData.name || ''}
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

export default CustomerTable