import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../../images/RF-white-logo.png";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate()
  const getClassName = (menuItem) => {
    return menu === menuItem ? "active" : "";
  };

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const location = useLocation();
  const hideNavbar = location.pathname === "/login";
  if (hideNavbar) {
    return null;
  }

  const handleLogout =()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <Link
            className={getClassName("home")}
            onClick={() => setMenu("home")}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("classes")}
            onClick={() => setMenu("classes")}
            to="/classes"
          >
            Classes
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("shop")}
            onClick={() => setMenu("shop")}
            to="/shop"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("about")}
            onClick={() => setMenu("about")}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("contact")}
            onClick={() => setMenu("contact")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="right-nav">
        <div>
          <img src={logo} alt="Profile" />
          <p>{userName ? userName: 'Not logged in '}</p>
        </div>
        <div>
          <button>
            {token ? (
              <Link to="/logout" onClick={handleLogout}>Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </button>
          <img src={logo} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
