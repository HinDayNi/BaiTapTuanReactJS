
const duLieu1 = {
    dolphins: [96, 108, 89],
    koalas: [88, 91, 110],
  };
  
  const duLieuBonus1 = {
    dolphins: [97, 112, 101],
    koalas: [109, 95, 123],
  };
  
  const duLieuBonus2 = {
    dolphins: [97, 112, 101],
    koalas: [109, 95, 106],
  };
  
  const tinhTrungBinh = (diem) => {
    return diem.reduce((a, b) => a + b, 0) / diem.length;
  };
  
  const xacDinhNguoiThang = (duLieu) => {
    const trungBinhDolphins = tinhTrungBinh(duLieu.dolphins);
    const trungBinhKoalas = tinhTrungBinh(duLieu.koalas);
  
    console.log(`Trung bình của Dolphins: ${trungBinhDolphins}`);
    console.log(`Trung bình của Koalas: ${trungBinhKoalas}`);
  
    if (trungBinhDolphins > trungBinhKoalas) {
      console.log("Dolphins thắng!");
    } else if (trungBinhKoalas > trungBinhDolphins) {
      console.log("Koalas thắng!");
    } else {
      console.log("Hòa!");
    }
  };
  
  const xacDinhNguoiThangVoiDiemToiThieu = (duLieu, diemToiThieu = 100) => {
    const trungBinhDolphins = tinhTrungBinh(duLieu.dolphins);
    const trungBinhKoalas = tinhTrungBinh(duLieu.koalas);
  
    console.log(`Trung bình của Dolphins: ${trungBinhDolphins}`);
    console.log(`Trung bình của Koalas: ${trungBinhKoalas}`);
  
    if (trungBinhDolphins >= diemToiThieu && trungBinhDolphins > trungBinhKoalas) {
      console.log(`Dolphins thắng với điểm trung bình là ${trungBinhDolphins} so với ${trungBinhKoalas}`);
    } else if (trungBinhKoalas >= diemToiThieu && trungBinhKoalas > trungBinhDolphins) {
      console.log(`Koalas thắng với điểm trung bình là ${trungBinhKoalas} so với ${trungBinhDolphins}`);
    } else if (trungBinhDolphins >= diemToiThieu && trungBinhKoalas >= diemToiThieu && trungBinhDolphins === trungBinhKoalas) {
      console.log(`Hòa với cả hai đội đều có điểm trung bình là ${trungBinhDolphins}`);
    } else {
      console.log(`Không đội nào giành được cúp`);
    }
  };
  
  console.log("Chạy cuộc thi...");
  xacDinhNguoiThang(duLieu1);
  
  console.log("Chạy cuộc thi với yêu cầu điểm tối thiểu...");
  xacDinhNguoiThangVoiDiemToiThieu(duLieuBonus1);
  xacDinhNguoiThangVoiDiemToiThieu(duLieuBonus2);