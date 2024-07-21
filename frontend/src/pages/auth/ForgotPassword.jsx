import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./auth.css";

function ForgotPassword() {
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[0-9@#$%^&+=]).{5,}$/;

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(passwordRegex.test(newPassword));
  }, [newPassword]);

  useEffect(() => {
    setPasswordMatch(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [email, newPassword, confirmPassword]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!validEmail) {
      setErrMsg("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(
        "auth/check-email",
        JSON.stringify({ email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
      } else {
        throw new Error("Email not found");
      }
    } catch (error) {
      setErrMsg("Email not found. Please try again.");
      console.error("There was an error!", error);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!validPassword || !passwordMatch) {
      setErrMsg("Please fill out the form correctly.");
      return;
    }

    try {
      const response = await axios.post(
        "auth/reset-password",
        JSON.stringify({ email, newPassword }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        navigate("/login");
      } else {
        throw new Error("Password reset failed");
      }
    } catch (error) {
      setErrMsg("There was an error resetting your password. Please try again.");
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="forgot-password">
      {!success ? (
        <form onSubmit={handleEmailSubmit}>
          <div className="input-div">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email Address"
              value={email}
              onChange={handleEmailChange}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailNote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              ref={emailRef}
            />
            {emailFocus && email && !validEmail && (
              <p id="emailNote" className="instructions">
                Please enter a valid email address.
              </p>
            )}
          </div>

          <button type="submit">Submit</button>

          {errMsg && (
            <p ref={errRef} className="errmsg" aria-live="assertive">
              {errMsg}
            </p>
          )}
        </form>
      ) : (
        <form onSubmit={handlePasswordSubmit}>
          <div className="input-div">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              autoComplete="off"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={handlePasswordChange}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordNote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            {passwordFocus && newPassword && !validPassword && (
              <p id="passwordNote" className="instructions">
                Password must be at least 5 characters and include a number or
                special character.
              </p>
            )}
          </div>

          <div className="input-div">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm New Password"
              autoComplete="off"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              aria-invalid={passwordMatch ? "false" : "true"}
              aria-describedby="confirmPasswordNote"
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
            {confirmPasswordFocus && confirmPassword && !passwordMatch && (
              <p id="confirmPasswordNote" className="instructions">
                Passwords must match.
              </p>
            )}
          </div>

          <button type="submit">Reset Password</button>

          {errMsg && (
            <p ref={errRef} className="errmsg" aria-live="assertive">
              {errMsg}
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
