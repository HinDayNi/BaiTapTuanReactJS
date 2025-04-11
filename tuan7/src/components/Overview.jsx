// import { useState, useEffect } from "react";

// function Overview() {
//     const [turnover, setTurnover] = useState({ value: 0, periodChange: 0 });
//     const [profit, setProfit] = useState({ value: 0, periodChange: 0 });
//     const [newCustomers, setNewCustomers] = useState({ value: 0, periodChange: 0 });
//     const [selectedRows, setSelectedRows] = useState([]);
//     const [customers, setCustomers] = useState([]);

//     // Gọi API cho Turnover
//     useEffect(() => {
//         fetch("http://localhost:3000/turnover")
//             .then(res => res.json())
//             .then(json => setTurnover(json))
//             .catch(error => console.log("Error fetching turnover:", error));
//     }, []);

//     // Gọi API cho Profit
//     useEffect(() => {
//         fetch("http://localhost:3000/profit")
//             .then(res => res.json())
//             .then(json => setProfit(json))
//             .catch(error => console.log("Error fetching profit:", error));
//     }, []);

//     // Gọi API cho New Customers
//     useEffect(() => {
//         fetch("http://localhost:3000/new-customers")
//             .then(res => res.json())
//             .then(json => setNewCustomers(json))
//             .catch(error => console.log("Error fetching new customers:", error));
//     }, []);
//     return (

//         <div className="h-40">
//             <div className="flex space-x-2">
//                 <img src="src/assets/Squares four 1.png" alt="Overview Icon" />
//                 <p className="text-xl font-bold">Overview</p>
//             </div>
//             <div className="overview p-1 space-x-2 flex">
//                 <div className="turnover flex bg-pink-100 p-3 justify-between">
//                     <div className="space-y-2">
//                         <p className="font-bold">Turnover</p>
//                         <p className="text-2xl font-bold">${turnover.value.toLocaleString()}</p>
//                         <p>{turnover.periodChange > 0 ? '+' : ''}{turnover.periodChange}% period of change</p>
//                     </div>
//                     <div>
//                         <img src="src/assets/Button 1509.png" alt="Turnover Icon" />
//                     </div>
//                 </div>
//                 <div className="profit flex bg-blue-100 p-3 justify-between">
//                     <div className="space-y-2">
//                         <p className="font-bold">Profit</p>
//                         <p className="text-2xl font-bold">${profit.value.toLocaleString()}</p>
//                         <p>{profit.periodChange > 0 ? '+' : ''}{profit.periodChange}% period of change</p>
//                     </div>
//                     <div>
//                         <img src="src/assets/Button 1529.png" alt="Profit Icon" />
//                     </div>
//                 </div>
//                 <div className="new_customer flex bg-blue-50 p-3 justify-between">
//                     <div className="space-y-2">
//                         <p className="font-bold">New Customer</p>
//                         <p className="text-2xl font-bold">{newCustomers.value}</p>
//                         <p>{newCustomers.periodChange > 0 ? '+' : ''}{newCustomers.periodChange}% period of change</p>
//                     </div>
//                     <div>
//                         <img src="src/assets/Button 1530.png" alt="New Customer Icon" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Overview;
