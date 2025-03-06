import React, { useState } from "react";

const Range = ({ min = 0, max = 100 }) => {
    const [minTime, setMinTime] = useState(min);
    const [maxTime, setMaxTime] = useState(max);

    // Xử lý thay đổi minTime
    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value < maxTime) {
            setMinTime(value);
        }
    };

    // Xử lý thay đổi maxTime
    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value > minTime) {
            setMaxTime(value);
        }
    };

    return (
        <div>
            {/* Hiển thị giá trị */}
            <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{minTime} phút</span>
                <span>{maxTime} phút</span>
            </div>

            {/* Thanh trượt */}
            <div className="relative w-full h-6">
                {/* Thanh nền */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-pink-500 rounded-full transform -translate-y-1/2"></div>

                {/* Đoạn thanh được chọn */}
                <div
                    className="absolute top-1/2 h-1 bg-pink-500 rounded-full"
                    style={{
                        left: `${((minTime - min) / (max - min)) * 100}%`,
                        right: `${100 - ((maxTime - min) / (max - min)) * 100}%`,
                        transform: "translateY(-50%)",
                    }}
                ></div>

                {/* Input range cho min */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minTime}
                    onChange={handleMinChange}
                    className="absolute w-full appearance-none bg-transparent"
                />

                {/* Input range cho max */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxTime}
                    onChange={handleMaxChange}
                    className="absolute w-full appearance-none bg-transparent"
                />

                {/* Nút kéo min */}
                <div
                    className="absolute top-1/2 w-6 h-6 bg-white border-2 border-pink-500 rounded-full shadow-md cursor-pointer transition-transform hover:scale-110"
                    style={{
                        left: `${((minTime - min) / (max - min)) * 100}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>

                {/* Nút kéo max */}
                <div
                    className="absolute top-1/2 w-6 h-6 bg-white border-2 border-pink-500 rounded-full shadow-md cursor-pointer transition-transform hover:scale-110"
                    style={{
                        left: `${((maxTime - min) / (max - min)) * 100}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Range;
