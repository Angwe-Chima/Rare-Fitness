import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../../images/RF-white-logo.png";
import cartImg from "../../../images/cart-img.svg";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../contexts/ShopContext";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [menu, setMenu] = useState(location.pathname);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || "https://avatar.iran.liara.run/public/"
  );

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const hideNavbar = ["/login", "/logout", "/register"].includes(location.pathname);

  useEffect(() => {
    setMenu(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Assume this function generates a new image URL
    const newImage = generateNewProfileImage();
    if (newImage) {
      localStorage.setItem("profileImage", newImage);
      setProfileImage(newImage);
    }
  }, []); // Empty array to only run once on component mount

  const generateNewProfileImage = () => {
    // Replace with your logic to generate a new image
    return "https://avatar.iran.liara.run/public/"; // Example image URL
  };

  const getClassName = (menuItem) => (menu === menuItem ? "active" : "");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("profileImage"); // Clear profile image on logout
    navigate("/login");
  };

  if (hideNavbar) {
    return null;
  }

  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <Link
            className={getClassName("/")}
            onClick={() => setMenu("/")}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("/classes")}
            onClick={() => setMenu("/classes")}
            to="/classes"
          >
            Classes
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("/shop")}
            onClick={() => setMenu("/shop")}
            to="/shop"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("/about")}
            onClick={() => setMenu("/about")}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={getClassName("/contact")}
            onClick={() => setMenu("/contact")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="right-nav">
        <div>
          {token && (
            <a href="/profile">
              <img
                className="profile_img"
                src={profileImage}
                alt="Profile"
              />
            </a>
          )}
          <p>{userName || "Not logged in"}</p>
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
            <a href="/cart">
              <img className="cart-img" src={cartImg} alt="Cart" />
            </a>
            <span>{getTotalCartItems()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
