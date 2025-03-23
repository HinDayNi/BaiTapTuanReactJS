import { createContext, useState } from "react";


export const MenuContext = createContext()

function Provider ({children}) {
    const [listOrder, setListOrder] = useState([])
    return(
        <MenuContext.Provider value={{listOrder, setListOrder}}>
            {children}
        </MenuContext.Provider>
    )
}
export default Provider