import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Home from "./pages/home/Home";
import Classes from "./pages/classes/Classes";
import Navbar from "./components/layout/navbar/Navbar";
import DashBoard from "./components/specific/DashBoard";
import "./css/App.css";
import CoursesData from "./pages/classes/courses/CoursesData";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/dashboard"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/dashboard" element={<DashBoard />} />
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
