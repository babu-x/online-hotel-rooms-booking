import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1 className="logo">
          SaaSAro <span className="span-hotel">Hotel</span>
        </h1>
      </div>
      <ul className="sections-container">
        <Link to={"/"} className="section">
          Home
        </Link>
        <Link to={"/bookings"} className="section">
          Book your room
        </Link>
        <Link to={"/cart"} className="section">
          cart
        </Link>
      </ul>
    </div>
  );
};

export default Header;
