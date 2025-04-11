import CustomerTable from './CustomerTable';
import Overview from './Overview';

function Content() {
    return (
        <div className="content p-3">
            <div className="h-40">
                <Overview />
            </div>
            <div>
                <CustomerTable />
            </div>
        </div>
    );
}

export default Content;
