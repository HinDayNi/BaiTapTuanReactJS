// Hàm tính tiền boa
const tinhTienBoa = (hoaDon) => {
    return hoaDon >= 50 && hoaDon <= 300 ? hoaDon * 0.15 : hoaDon * 0.2;
  };
  
  // Dữ liệu thử nghiệm
  const hoaDon1 = 275;
  const hoaDon2 = 40;
  const hoaDon3 = 430;
  
  // Tính tiền boa và tổng giá trị
  const tienBoa1 = tinhTienBoa(hoaDon1);
  const tongGiaTri1 = hoaDon1 + tienBoa1;
  console.log(`Hóa đơn là ${hoaDon1}, tiền boa là ${tienBoa1} và tổng giá trị là ${tongGiaTri1}`);
  
  const tienBoa2 = tinhTienBoa(hoaDon2);
  const tongGiaTri2 = hoaDon2 + tienBoa2;
  console.log(`Hóa đơn là ${hoaDon2}, tiền boa là ${tienBoa2} và tổng giá trị là ${tongGiaTri2}`);
  
  const tienBoa3 = tinhTienBoa(hoaDon3);
  const tongGiaTri3 = hoaDon3 + tienBoa3;
  console.log(`Hóa đơn là ${hoaDon3}, tiền boa là ${tienBoa3} và tổng giá trị là ${tongGiaTri3}`);