import { useState } from "react";
import { Link } from "react-router-dom"; 
import Footer from "./Footer"; 
function Header() {
  const [booked, setBooked] = useState(false); 

  const handleBook = () => {
    setBooked(true); 
  };

  return (
    <header>
      <nav>
        <Link to="/">Trang chu</Link>
        <Link to="/menu">Thuc don</Link>
        <Link to="/contact">Lien he</Link>
      </nav>
      <button onClick={handleBook}>
        {booked ? "Table Booked" : "Book Table"} 
      </button>
    </header>
  );
}

export default Header;
