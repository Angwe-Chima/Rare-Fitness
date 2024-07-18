import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../../images/RF-white-logo.png";
import cartImg from "../../../images/cart-img.svg";
import { useState, useEffect } from "react";

function Navbar() {
  const [menu, setMenu] = useState(localStorage.getItem("menu") || "home");
  const navigate = useNavigate();
  const location = useLocation();

  const getClassName = (menuItem) => {
    return menu === menuItem ? "active" : "";
  };

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const hideNavbar = ["/login", "/logout", "/register"].includes(location.pathname);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);

  // Ensure hooks are always called
  if (hideNavbar) {
    return <div />;
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
          {token ? (
            <img
              className="cart-img"
              src="https://avatar.iran.liara.run/public/"
              alt="Profile"
            />
          ) : (
            ""
          )}
          <p>{userName ? userName : "Not logged in "}</p>
        </div>
        <div>
          <button>
            {token ? (
              <Link to="/logout" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </button>
          <div className="cart-div">
            <img className="cart-img" src={cartImg} alt="Profile" />
            <span>22</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
