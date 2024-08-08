import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import axios from "./api/axios"; // Adjust the path according to your folder structure
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Home from "./pages/home/Home";
import Classes from "./pages/classes/Classes";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/layout/navbar/Navbar";
import DashBoard from "./components/specific/DashBoard";
import "./css/App.css";
import CoursesData from "./pages/classes/courses/CoursesData";
import User from "../src/components/specific/user/User";
import Product from "../src/components/specific/product/Product";
import Order from "../src/components/specific/order/Order";
import ForgotPassword from "./pages/auth/ForgotPassword";
function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/dashboard", "/dashboard/product", "/dashboard/user", "/dashboard/order", "/forgot-password"];

  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        await axios.post("/visitor");
      } catch (err) {
        console.log(err);
      }
    };

    incrementVisitorCount();
  }, []);

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/user" element={<User />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/order" element={<Order />} />
        {CoursesData.map((element) => (
          <Route
            key={element.id}
            path={`/classes/${element.urlTitle.toLowerCase()}`}
            element={<element.Component />}
          />
        ))}
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
