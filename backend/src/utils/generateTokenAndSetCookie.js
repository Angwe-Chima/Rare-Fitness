import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  const maxSessionAge = 8 * 60 * 60 * 1000; // 8 hours

  // Set cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Strict",
    maxAge: maxSessionAge,
  });

  // Store token in res.locals to include in the response
  res.locals.token = token;
  return token;
};

export default generateTokenAndSetCookie;
