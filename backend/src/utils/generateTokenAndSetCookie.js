import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  // Generate JWT token
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

  // Set cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Strict",
    maxAge: 3600000, // 1 hour
  });

  // Store token in res.locals to include in the response
  res.locals.token = token;
  return token;
};

export default generateTokenAndSetCookie;
