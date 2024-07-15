import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";
import googleLogo from "../images/google-icon.png";
import axios from "axios";
import { Link } from "react-router-dom";

const fullNameRegex = /^[a-zA-Z\s'-]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[0-9@#$%^&+=]).{5,}$/;

import lady from '../images/fit-lady.png';


function Register() {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [fullName, setFullName] = useState("");
  const [validFullName, setValidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

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
    setValidFullName(fullNameRegex.test(fullName));
  }, [fullName]);

  useEffect(() => {
    setValidEmail(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setValidpassword(passwordRegex.test(password));
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [user, fullName, email, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      // Capitalize the first letter and concatenate with the rest of the string
      setUser(value.charAt(0).toUpperCase() + value.slice(1));
    } else if (name === "fullName") {
      setFullName(value.charAt(0).toUpperCase() + value.slice(1));
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setpassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validName || !validFullName || !validEmail || !validpassword) {
      setErrMsg("Please fill out the form correctly.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        user,
        fullName,
        email,
        password,
      });
      console.log("Data submitted:", response.data);
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      console.error("There was an error!", error);
      setErrMsg("Registration failed. Please try again.");
    }
  };

  console.log(success);
  return (
    <div className="register">
      <div className="left">
        <img src={lady} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <p>Already member?</p>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>

        <div className="whole">
          <div className="signup-opt">
            <h3>Sign up with Google</h3>
            <div>
              <a href="">
                <img src={googleLogo} alt="Google logo" />
              </a>
            </div>
          </div>

          <div className="or">
            <span></span> Or <span></span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="dbl-input">
              <div className="input-div">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  ref={userRef}
                  autoComplete="off"
                  value={fullName}
                  onChange={handleChange}
                  required
                  aria-invalid={validFullName ? "false" : "true"}
                  aria-describedby="fullNameNote"
                  onFocus={() => setFullNameFocus(true)}
                  onBlur={() => setFullNameFocus(false)}
                />
                {fullNameFocus && fullName && !validFullName && (
                  <p id="fullNameNote" className="instructions">
                    Full name must be at least 2 characters long and contain
                    only letters, spaces, hyphens, and apostrophes.
                  </p>
                )}
              </div>
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
                />
                {userFocus && user && !validName && (
                  <p id="userNote" className="instructions">
                    Username must be 3-16 characters long and contain only
                    letters, numbers, and underscores.
                  </p>
                )}
              </div>
            </div>
            <div className="input-div-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleChange}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailNote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              {emailFocus && email && !validEmail && (
                <p id="emailNote" className="instructions">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className="input-div-1">
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
                  Password must be at least 5 characters long and contain at
                  least one number or special character.
                </p>
              )}
            </div>
            <div className="btn-div">
              <button>Create Account</button>
            </div>
            {errMsg && (
              <p ref={errRef} className="errmsg" aria-live="assertive">
                {errMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
