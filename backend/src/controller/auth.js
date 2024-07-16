import User from "../model/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import handleCatchError from "../utils/handleCatchError.js";

export const register = async (req, res) => {
  try {
    const { fullName, user, email, password } = req.body;

    const foundUser = await User.findOne({ user });
    if (foundUser) {
      return res.status(400).json({
        error: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      fullName,
      user,
      email,
      password: hashedPassword,
      role: "customer",
    });

    await newUser.save();

    // Generate token and set cookie
    const token = generateTokenAndSetCookie(newUser._id, res);

    // Send user data back to the client
    const userData = {
      _id: newUser._id,
      fullName: newUser.fullName,
      user: newUser.user,
      email: newUser.email,
      token, // Include the token in the response
    };
    res.status(201).json(userData);
  } catch (err) {
    // Handle errors
    handleCatchError(err, "register", res);
  }
};

export const login = async (req, res) => {
  try {
    const { user, password } = req.body;
    const foundUser = await User.findOne({ user });
    if (!foundUser) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate token and set cookie
    const token = generateTokenAndSetCookie(foundUser._id, res);
    
    // Send user data back to the client, including the token
    res.status(200).json({
      _id: foundUser._id,
      fullName: foundUser.fullName,
      user: foundUser.user,
      email: foundUser.email,
      token, // Include the token in the response
    });
  } catch (err) {
    handleCatchError(err, "login", res);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).send({ message: "Logged out successfully" });
  } catch (err) {
    handleCatchError(err, "logout", res);
  }
};
