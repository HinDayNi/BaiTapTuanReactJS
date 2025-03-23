import { useState } from "react"
import {Routes, Route, Link} from 'react-router-dom'
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Contact from "../pages/Contact"
import BookTable from "./BookTable"
import Hooks from "../stores/Hooks"

export const menuList = [
    {name: "Trang chủ", to: "/home", tagName: Home},
    {name: "Thực đơn", to: "/menu", tagName: Menu},
    {name: "Liên hệ", to: "/contact", tagName: Contact},
]
function Header() {
    const {listOrder, setListOrder} = Hooks()
    return(
        <>
            <div className="sticky flex top-0 left-0 w-full bg-amber-200 text-blue-700 ">
                <ul className="flex justify-between w-2xs h-20 p-6">
                    {menuList.map((menu, index) => (
                        <li key={index}> <Link to={menu.to} className="hover:text-gray-300 transition">{menu.name}</Link></li>
                    ))}
                </ul>
                <div className="absolute w-7 h-7 bg-red-600 text-center rounded-4xl text-white right-2 top-2 z-5" >
                     {listOrder.length}
                </div>
                <Link to="/book" className="hover:text-gray-300 transition absolute top-4 right-5">
                    <button 
                        className="bg-blue-700 hover:!bg-amber-300 hover:text-amber-100"
                    >
                        Book Table
                    </button>
                </Link>
            </div>
        </> 
    )
}
export default Header