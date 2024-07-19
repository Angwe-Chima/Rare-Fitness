import { useRef, useState, useEffect } from "react";
import "./auth.css";
import googleLogo from "../../images/google-icon.png";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import guy from "../../images/fit-guy.png";
import { Link } from "react-router-dom";

// Regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[0-9@#$%^&+=]).{5,}$/;

function Register() {
  // Refs for user input and error message
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  // State variables for form fields, validation, focus, error message, and success status
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Focus on the username input field when the component mounts
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Validate username using regex
  useEffect(() => {
    setValidName(usernameRegex.test(user));
  }, [user]);

  // Validate password using regex
  useEffect(() => {
    setValidPassword(passwordRegex.test(password));
  }, [password]);

  // Clear error message when any form field value changes
  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  // Handle input changes and capitalize the first letter of the username
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setUser(value.charAt(0).toUpperCase() + value.slice(1));
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validName || !validPassword) {
      setErrMsg("Please fill out the form correctly.");
      return;
    }
    try {
      const response = await axios.post(
        "auth/login",
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: "include",
        }
      );

      // Check if the response status indicates success (e.g., status code 200)
      if (response.status === 200) {
        const { role } = response.data;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.fullName);
        setSuccess(true);
        
        // Redirect based on role
        if (role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        throw new Error("Login failed");
      }
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
          <Link to="/register">Sign Up</Link>
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
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                required
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="passwordNote"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              {passwordFocus && password && !validPassword && (
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
