

function Menu(){
    return(
        <>
            <div className="menu">
                <img src="src/assets/logo.png"/>
                <div className="">
                    <div className="flex flex-col gap-3 ">
                        <button className="flex hover:!bg-pink-300 ">
                            <img src="src/assets/Folder.png"/>
                            Dashboard
                        </button>
                        <button className="flex hover:!bg-pink-300">
                            <img src="src/assets/Groups.png"/>
                            Projects
                        </button>
                        <button className="flex hover:!bg-pink-300">
                            <img src="src/assets/Pie chart.png"/>
                            Teams
                        </button>
                        <button className="flex hover:!bg-pink-300">
                            <img src="src/assets/Chat.png"/>
                            Analytics
                        </button>
                        <button className="flex hover:!bg-pink-300">
                            <img src="src/assets/Chat.png"/>
                            Messages
                        </button>
                        <button className="flex hover:!bg-pink-300">
                            <img src="src/assets/Code.png"/>
                            Integrations
                        </button>
                    </div>
                    <img src="src/assets/Group.png" className="flex items-center justify-center space-x-2"/>
                </div>
            </div>
        </>
    )
}
export default Menu