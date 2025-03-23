import { useEffect, useState } from "react"
import Hooks from "../stores/Hooks"

function MenuList(){

    const [menus, setMenus] = useState([])

    const {listOrder, setListOrder} = Hooks()

    const [selectMon, setSelectMon] = useState(null)


    console.log(listOrder)

    useEffect(() => {
        fetch("/src/data/menu.json")
        .then(res => res.json())
        .then(menus => {
            setMenus(menus)
        })
    },[])

    const handleAdd = (item) =>{
        setListOrder((prev) => [...prev, item])
    }

    return (
        <div className="m-10">
            <div className="grid-cols-3 grid space-x-5 space-y-10 " >
                {menus.map((item) => (
                    <div 
                        key={item.id} 
                        className="text-black font-extralight text-left justify-items-center shadow shadow-amber-300 rounded-2xl p-3 "
                        onClick={() => {
                            setSelectMon(selectMon?.id === item.id ? null: item);
                          }}
                    >
                        <img
                            src={item.hinhAnh}
                            alt={item.temMon}
                        />
                        <h3 className="font-bold text-black">{item.temMon}</h3>
                        <p className="font-bold text-red-600">{item.gia} VNĐ</p>
                        {selectMon?.id === item.id && (
                            <div className="text-black">
                                <p>{selectMon.moTa}</p>
                            </div>
                        )}
                        <button className="hover:!bg-blue-300 transition hover:text-amber-50 text-blue-800 font-bold !bg-amber-400"
                            onClick={(e) => {
                                e.stopPropagation()
                                handleAdd(item)
                            }}
                        >
                            Add
                        </button>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default MenuList