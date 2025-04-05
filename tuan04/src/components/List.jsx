import { useState } from "react";
import { items } from "../data/data";
function RenderList() {
    const [text,setText] = useState('');

    const handleChange = (e)=>{
        setText(e.target.value);
    }

    const handleClick = ()=>{
        
    }

    const filterItems = items.filter(item => 
        item.type.toLowerCase().includes(text.toLowerCase())
    );
  
    return (
    <div id="search">
        <input 
            type="text" 
            value={text} 
            onChange={handleChange}
        />
        <button onClick={handleClick}>Tìm kiếm</button>
        <div id="items">
            {filterItems.map((item, index) => (
                <div key={index} className="item">
                    <img src={item.image} alt="hinh" />
                    <h3>{item.type}</h3>
                    <p>{item.description}</p>
                    <p>{item.note}</p>
                </div>
            ))}
        </div>

    </div> 
    )
}

export default RenderList;