import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from "./pages/home/Home"
import Navbar from "./components/layout/navbar/Navbar";
import './css/App.css'

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
