
import logo from '../assets/avatar_small.png'
import account from '../assets/avatar.png'
import { MagnifyingGlassIcon, ShieldCheckIcon  } from "@heroicons/react/24/outline";

const menuItems = ['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us']

function Header(){

    return(
        <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between bg-white px-10 py-4 shadow-sm z-50">
            <div className="flex items-center space-x-6">
                <img src= {logo} className="flex space-x-10" alt = "Logo"/>
                <div className="flex bg-gray-200 h-10 items-center px-2 py-2 rounded-full">
                    <MagnifyingGlassIcon className="h-6 w-6 mr-3 text-gray-400"/>
                    <input 
                        type="text" 
                        placeholder="Cakescascsa"
                        className="ml-3 focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex m-5">
                <ul className="flex space-x-5 justify-center font-medium text-gray-400">
                    {menuItems.map((key, value) => (
                        <li key={value} className="">
                            {key}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                {/* Login Button */}
                <button className="!bg-pink-100 text-pink-500 px-4 py-2 rounded-full font-medium hover:bg-pink-200">
                    Login
                </button>

                {/* Subscribe Button */}
                <button className="!bg-pink-500 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-600">
                    Subscribe
                </button>
            </div>
            
        </div>
    )
}
export default Header;