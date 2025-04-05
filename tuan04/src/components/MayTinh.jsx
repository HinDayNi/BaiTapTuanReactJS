import React, { useState } from 'react';

function Maytinh() {
  console.log("Component MayTinh đang render...");

  // State để lưu giá trị hiển thị trên input
  const [display, setDisplay] = useState("");

  // Hàm xử lý khi bấm nút số hoặc phép toán
  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  // Hàm xử lý khi bấm "=" để tính toán
  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString()); // Tính kết quả
    } catch (error) {
      setDisplay("Lỗi"); // Bắt lỗi nhập sai
    }
  };

  // Hàm xử lý khi bấm "C" (Xóa toàn bộ)
  const clearDisplay = () => {
    setDisplay("");
  };

  // Hàm xử lý khi bấm "CE" (Xóa 1 ký tự cuối)
  const clearLastCharacter = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  // Hàm tạo nút bấm
  const button = (name, onClick) => (
    <button onClick={() => onClick(name)}>{name}</button>
  );

  return (
    <div>
      <div>Máy Tính T&H</div>
      <input type="text" value={display} readOnly />
      
      <div className='numbers'>
        {button('1', handleClick)}
        {button('2', handleClick)}
        {button('3', handleClick)}
        {button('4', handleClick)}
        {button('5', handleClick)}
        {button('6', handleClick)}
        {button('7', handleClick)}
        {button('8', handleClick)}
        {button('9', handleClick)}
        {button('0', handleClick)}
      </div>
      
      <div className='operation'>
        {button('+', handleClick)}
        {button('-', handleClick)}
        {button('*', handleClick)}
        {button('/', handleClick)}
        {button('%', handleClick)}
      </div>
      
      <div className='results'>
        {button('CE', clearLastCharacter)}
        {button('C', clearDisplay)}
        {button('X', clearLastCharacter)}
        {button('=', calculateResult)}
      </div>
    </div>
  );
}

export default Maytinh;
