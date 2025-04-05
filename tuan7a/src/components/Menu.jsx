import { Link } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Project from '../pages/Project'
import Teams from '../pages/Teams'
import Analytics from '../pages/Analytics'
import Messages from '../pages/Messages'
import Intergrations from '../pages/Intergrations'
export const menuList = [
    { name: "Dashboard", link: "/dashboard", tagName: Dashboard },
    { name: "Project", link: "/project", tagName: Project },
    { name: "Teams", link: "/teams", tagName: Teams },
    { name: "Analytics", link: "/analytics", tagName: Analytics },
    { name: "Messages", link: "/messages", tagName: Messages },
    { name: "Intergrations", link: "/intergrations", tagName: Intergrations }
]
function Menu() {
    return (
        <>
            <div className="menu space-y-2 shadow shadow-gray-400 p-2" style={{ boxShadow: "4px 0 6px -2px rgba(156, 163, 175, 0.5)" }}>
                <img src="src/assets/Image 1858.png" className="p-2" alt="" />
                <div className="bg-blue-600 sticky w-full top-0 h-20 flex justify-center items-center space-x-3">
                    {menuList.map((item, index) => (
                        <Link key={index} to={item.link} className='!text-white !font-bold ml-4'>
                            {item.name}
                        </Link>
                    ))}

                </div>
                <div className="flex flex-col gap-3">
                    <button className="flex space-x-2">
                        <img src="src/assets/Pie chart.png" className="" alt="" />
                        <p>Dashboard</p>
                    </button>
                    <button className="flex space-x-2">
                        <img src="src/assets/Folder.png" className="" alt="" />
                        <p>Project</p>
                    </button>
                    <button className="flex space-x-2">
                        <img src="src/assets/Groups.png" className="" alt="" />
                        <p>Teams</p>
                    </button>
                    <button className="flex space-x-2">
                        <img src="src/assets/Pie chart.png" className="" alt="" />
                        <p>Analytics</p>
                    </button>
                    <button className="flex space-x-2">
                        <img src="src/assets/Chat.png" className="" alt="" />
                        <p>Messages</p>
                    </button>
                    <button className="flex space-x-2">
                        <img src="src/assets/Code.png" className="" alt="" />
                        <p>Intergrations</p>
                    </button>
                </div>
                <img src="src/assets/Group.png" className="" alt="" />
            </div>
        </>
    )
}
export default Menu;