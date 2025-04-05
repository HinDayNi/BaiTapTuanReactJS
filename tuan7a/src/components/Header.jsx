function Header(){
    return (
        <>
            <div className="header flex items-center justify-between shadow shadow-gray-400 rounded-b-md p-2"  style={{ boxShadow: "0 4px 6px -2px rgba(156, 163, 175, 0.5)" }}>
                <p className="font-bold text-2xl text-pink-500">Dashboard</p>
                <div className="flex items-center">
                    <img src="src/assets/Search.png" className="h-5" alt="" />
                    <input type="text" placeholder="Vui lòng nhập" />
                    <img src="src/assets/Bell 1.png" className="h-6" alt="" />
                    <img src="src/assets/Question 1.png" className="h-6" alt="" />
                    <img src="src/assets/Avatar (1).png" className="h-8" alt="" />
                </div>
            </div>
        </>
    )
}
export default Header;