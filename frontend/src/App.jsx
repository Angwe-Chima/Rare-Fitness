import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "./api/axios"; // Adjust the path according to your folder structure
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Home from "./pages/home/Home";
import Classes from "./pages/classes/Classes";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import DashBoard from "./components/specific/DashBoard";
import "./css/App.css";
import User from "./components/specific/user/User";
import Product from "./components/specific/product/Product";
import Order from "./components/specific/order/Order";
import Email from "./components/specific/email/Email";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { ShopContext } from "./contexts/ShopContext";
import Shop from "./pages/shop/Shop";
import Productt from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import CoursesData from "./pages/classes/courses/CoursesData";
import ClassDetailsAquatic from "./components/class-detail/ClassDetailsAquatic";
import ClassDetailsCardio from "./components/class-detail/ClassDetailsCardio";
import ClassDetailsDance from "./components/class-detail/ClassDetailsDance";
import ClassDetailsGroup from "./components/class-detail/ClassDetailsGroup";
import ClassDetailsIndoor from "./components/class-detail/ClassDetailsIndoor";
import ClassDetailsStretch from "./components/class-detail/ClassDetailsStretch";
import ClassDetailsWeight from "./components/class-detail/ClassDetailsWeight";
import ClassDetailsYoga from "./components/class-detail/ClassDetailsYoga";
import ClassDetailsSport from "./components/class-detail/ClassDetailsSport";

function App() {
  const { products } = useContext(ShopContext);
  const location = useLocation();
  const hideNavbarPaths = [
    "/dashboard",
    "/dashboard/product",
    "/dashboard/user",
    "/dashboard/order",
    "/forgot-password",
    "/dashboard/email",
  ];

  // State to hold the fetched course data
  const [courses, setCourses] = useState([]);

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

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/classes");
        const fetchedCourses = response.data.data;

        // Map fetched courses to components using CoursesData
        const coursesWithComponents = fetchedCourses.map((course) => {
          const matchingCourse = CoursesData.find((c) => c.id === course.id);
          return {
            ...course,
            Component: matchingCourse ? matchingCourse.Component : null,
          };
        });

        setCourses(coursesWithComponents);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/product/:productId" element={<Productt />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/user" element={<User />} />
        <Route path="/dashboard/email" element={<Email />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/order" element={<Order />} />
        <Route path="/aquatic-class-details/:id" element={<ClassDetailsAquatic />} />
        <Route path="/cardio-class-details/:id" element={<ClassDetailsCardio />}/>
        <Route path="/dance-class-details/:id" element={<ClassDetailsDance />} />
        <Route path="/group-class-details/:id" element={<ClassDetailsGroup />} />
        <Route path="/indoor-class-details/:id" element={<ClassDetailsIndoor />} />
        <Route path="/stretch-class-details/:id" element={<ClassDetailsStretch />} />
        <Route path="/weight-class-details/:id" element={<ClassDetailsWeight />} />
        <Route path="/yoga-class-details/:id" element={<ClassDetailsYoga />} />
        <Route path="/sport-class-details/:id" element={<ClassDetailsSport />} />
        {courses.map(
          (course) =>
            course.Component && (
              <Route
                key={course.id}
                path={`/classes/${course.urlTitle.toLowerCase()}`}
                element={<course.Component />}
              />
            )
        )}
      </Routes>
      <Footer />
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
