function Header() {
    return (
        <div className="header flex items-center justify-between shadow shadow-gray-400 rounded-b-md w-full" style={{ boxShadow: "0 4px 6px -2px rgba(156, 163, 175, 0.5)" }}>
            <div className="text-left">
                <p className="font-bold text-3xl text-pink-500">Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
                <img src="src/assets/Search.png" className="h-5" alt="Search" />
                <input type="text" placeholder="Vui lòng nhập" className="border px-2 py-1 rounded-md text-sm" />
                <img src="src/assets/Bell 1.png" className="h-6" alt="Notification" />
                <img src="src/assets/Question 1.png" className="h-6" alt="Help" />
                <img src="src/assets/Avatar (1).png" className="h-8 rounded-full" alt="User Avatar" />
            </div>
        </div>
    );
}
export default Header

