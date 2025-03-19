
import { useState } from "react";
import MultiRangeSlider from "./tools/MultiRangeSlider";
import { Bars3Icon, ChevronUpIcon  } from "@heroicons/react/24/outline";
const menuType = ['Pan-fried','Stir-fried','Grilled','Roasted','Sauteed','Baked','Steamed','Stewed']
function Filters(){

    const ratings = [5, 4, 3, 2]; 
    const [selected, setSelected] = useState([false, false, false, false]);

    const toggleCheckbox = (index) => {
        const newSelected = [...selected];
        newSelected[index] = !newSelected[index];
        setSelected(newSelected);
    };

    return(
        <div className="m-5  w-64 bg-white shadow-lg p-4">
            <div className="flex space-x-2">
                <Bars3Icon className="h-6 w-6 text-gray-500" />
                <h2 className="font-bold">FILTERS</h2>
            </div>
            <div className="">
                <h3 className="font-bold text-left">Type</h3>
                <div className="grid grid-cols-2 gap-2">
                    {menuType.map((key, value) => (
                        <label key={value} className="flex items-center">
                            <input type="checkbox" />
                            <span>{key}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <MultiRangeSlider
                    min={0}
                    max={100}
                    onChange={({min,max}) => console.log('min=${min},max=${max}')}
                />
            </div>
            <div className="m-5">
                <div className="flex">
                        <h3 className="font-bold text-left">Rating</h3>
                        <ChevronUpIcon class="h-6 w-6 text-pink-500 " />
                </div>
                {ratings.map((stars, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {/* Checkbox */}
                        <input 
                            type="checkbox" 
                            checked={selected[index]} 
                            onChange={() => toggleCheckbox(index)}
                            className="w-5 h-5 rounded border-gray-400 checked:bg-pink-500 checked:border-transparent cursor-pointer"
                        />
                        
                        {/* Hiển thị sao */}
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-2xl ${i < stars ? 'text-yellow-400' : 'text-gray-300'}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button className=" !bg-pink-500 w-full text-white font-bold rounded-lg shadow-md hover:bg-pink-500 transition">
                    Apply
                </button>
            </div>
        </div>
    )
}
export default Filters;