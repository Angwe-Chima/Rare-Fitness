import { useRef, useState, useEffect } from "react";
import "../css/Login.css";
import googleLogo from "../images/google-icon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[0-9@#$%^&+=]).{5,}$/;

import guy from '../images/fit-guy.png';


function Register() {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setpassword] = useState("");
  const [validpassword, setValidpassword] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(usernameRegex.test(user));
  }, [user]);

  useEffect(() => {
    setValidpassword(passwordRegex.test(password));
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      // Capitalize the first letter and concatenate with the rest of the string
      setUser(value.charAt(0).toUpperCase() + value.slice(1));
    } else if (name === "password") {
      setpassword(value);
    }
    if (name === "password") setpassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validName || !validpassword) {
      setErrMsg("Please fill out the form correctly.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        user,
        password,
      });
      console.log("Data submitted:", response.data);
      setSuccess(true);
      navigate("/home");
    } catch (error) {
      setErrMsg("There was an error submitting your data.");
      console.error("There was an error!", error);
    }
  };


  return (
    <div className="register">
      <div className="left">
        <img src={guy} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <p>Do not have an account?</p>
          <button>
            <a href="/register">Sign Up</a>
          </button>
        </div>

        <div className="whole">
          <div className="signup-opt">
            <h3>Login with Google</h3>
            <div>
              <a href="">
                <img src={googleLogo} alt="Google Login" />
              </a>
            </div>
          </div>

          <div className="or">
            <span></span> Or <span></span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                id="userName"
                name="user"
                autoComplete="off"
                value={user}
                onChange={handleChange}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="userNote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                ref={userRef}
              />
              {userFocus && user && !validName && (
                <p id="userNote" className="instructions">
                  Username must be 3-16 characters and can include letters,
                  numbers, and underscores.
                </p>
              )}
            </div>

            <div className="input-div">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                required
                aria-invalid={validpassword ? "false" : "true"}
                aria-describedby="passwordNote"
                onFocus={() => setpasswordFocus(true)}
                onBlur={() => setpasswordFocus(false)}
              />
              {passwordFocus && password && !validpassword && (
                <p id="passwordNote" className="instructions">
                  Password must be at least 5 characters and include a number or
                  special character.
                </p>
              )}
            </div>

            <div className="btn-div">
              <button type="submit">Login</button>
            </div>

            {errMsg && (
              <p ref={errRef} className="errmsg" aria-live="assertive">
                {errMsg}
              </p>
            )}

            {success && <p className="successmsg">Successfully logged in!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
