import { useState, useEffect } from "react";
function MenuList(){
    const [oder, setOder] = useState([])

    const handleOrder =(item)=>{
        setOder([...oder,item]);
    }
    return(
        <div>
            {this.pops.menu.map((item)=>(
                <div key={item.id}>
                    <img src={item.image}/>
                    <h3>{item.name} -{item.price} VND</h3>
                    <p>{item.des}</p>
                    <button onClick={handleOrder}>Them vao gio</button>
                </div>
            ))}
        </div>
    )
}
export default MenuList;