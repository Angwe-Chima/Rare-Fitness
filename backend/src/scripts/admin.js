import bcrypt from "bcryptjs";
import User from "../model/user.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import dotenv from "dotenv";
dotenv.config();

const createAdminAccount = async (req, res) => {
  try {
    const existsAdmin = await User.findOne({
      user: "Admin",
      email: "angwechima@gmail.com",
    });

    if (!existsAdmin) {
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
      const newAdmin = new User({
        user: "Admin",
        email: "angwechima@gmail.com", 
        fullName: "Admin",
        password: hashedPassword,
        role: "admin"  
      });
      await newAdmin.save();

      // Generate token and set cookie if `res` is available
      if (res) {
        generateTokenAndSetCookie(newAdmin._id, res);
        console.log("Admin created successfully");
        res.status(201).json({ message: "Admin created successfully" });
      } else {
        console.log("Admin created successfully without response object");
      }
    } else {
      console.log("Admin already exists");
      if (res) {
        res.status(400).json({ message: "Admin already exists" });
      }
    }
  } catch (err) {
    console.log(err.message);
    if (res) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default createAdminAccount;
