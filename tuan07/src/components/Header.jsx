
function Header(){
    return(
        <>
            <div className="header">
               <div className="flex justify-between items-center">
                    <p className="flex text-2xl font-bold">Dashboard</p>
                    <div className="flex justify-items-end">
                        <input 
                            type="text"
                            placeholder="Search..."
                            className="flex items-center justify-center border-2 border-gray-300 rounded-2xl:"
                        />
                        <img src="src/assets/Bell 1.png"/>
                        <img src="src/assets/Question 1.png"/>
                        <img src="src/assets/Avatar (3).png"/>
                    </div>
                </div>
               
            </div>
        </>
    )
}
export default Header