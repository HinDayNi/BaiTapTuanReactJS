
import { MenuContext } from "./MenuContext";
import { useContext } from "react";

function Hooks(){
    const {listOrder, setListOrder} = useContext(MenuContext)
        return {listOrder, setListOrder} 

}
export default Hooks