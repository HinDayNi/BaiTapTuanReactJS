
import { useState} from "react";
function LaiSuat(){

    const [tienGuiVao, setTienGuiVao] = useState('')
    const [laiSuat, setLaiSuat] = useState('')
    const [tienMongMuon, setTienMongMuon] = useState('')
    const [results, setResults] = useState([])

    const handleTienGuiVao = (e) => {
        setTienGuiVao(e.target.value)
        console.log(tienGuiVao)
    }
    const handleLaiSuat = (e) => {
        setLaiSuat(e.target.value)
        console.log(laiSuat)
    }
    const handleTienMongMuon = (e) => {
        setTienMongMuon(e.target.value)
        console.log(tienMongMuon)
    }

    const handleTinhToan = () => {
        const namHienTai = new Date().getFullYear();
        const ketQua = tinhLaiKepDenMucTieu(
            parseFloat(tienGuiVao),
            parseFloat(laiSuat),
            1,
            parseFloat(tienMongMuon),
            namHienTai
        );
        setResults(ketQua);
    }

    function tinhLaiKepDenMucTieu(P, r, n, mucTieu,namHienTai) {
    
    // P: Số tiền gửi ban đầu.
    // r: Lãi suất gửi mỗi năm (dưới dạng phần trăm).
    // n: Số lần lãi tính trong năm (ở đây giả sử lãi được tính một lần mỗi năm).
    // mucTieu: Tiền mục tiêu mong muốn.
    // namHienTai: Năm bắt đầu tính.

        let nam = namHienTai;
        let A = P; 
        let history = [];// // Mảng lưu kết quả theo từng năm
    
        while (A < mucTieu) {
            A = A * Math.pow((1 + r / (n * 100)), n);
            history.push({ nam, tongTien: A.toFixed(2) });
            nam++;
        }
    
        return history;
    }

    return(
       <div class="container">
            <div class="input-group">
                <lable>Số tiền gửi</lable>
                <input 
                    type = "text"
                    value={tienGuiVao}
                    placeholder="VND"
                    required // bắt buộc nhập 
                    onChange={handleTienGuiVao} 
                />
            </div>
            <br/>
            <div class="input-group">
                <label>Lãi suất gửi </label> 
                <input 
                    type = "text"
                    value={laiSuat}
                    placeholder="%/năm"
                    required // bắt buộc nhập 
                    onChange={handleLaiSuat}
                />
            </div>
            <br/> 
            <div class="input-group">
                <lable>Tiền gửi mong muốn </lable>
                <input 
                    type = "text"
                    value={tienMongMuon}
                    placeholder="VND"
                    required // bắt buộc nhập 
                    onChange={handleTienMongMuon}
                />
            </div>
            <br/> 
            <button id = "tinhLaiSuat" onClick={handleTinhToan}>
                Tính lãi suất
            </button>
            <table id = "result" >
                <thead>
                    <tr>
                        <th>Năm</th>
                        <th>Tổng tiền tích lũy</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((r, i) => (
                            <tr key={i}>
                                <td>{r.nam}</td>
                                <td>{r.tongTien}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
       </div>
    )
}
export default LaiSuat;