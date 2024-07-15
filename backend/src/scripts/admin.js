import User from "../model/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import dotenv from "dotenv";
dotenv.config();

const createAdminAccount = async (req, res) => {
  try {
    const existsAdmin = await User.findOne({
      user: "Admin",
      email: "admin@admin.com",
    });
    if (!existsAdmin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      const newAdmin = new User({
        user: "Admin",
        email: "admin@admin.com",
        fullName: "Admin Chima",
        password: hashedPassword,
        role: "admin"
      });
      await newAdmin.save();

      // Generate token and set cookie 
      generateTokenAndSetCookie(newAdmin._id, res);

      console.log("Admin created successfully");
    } else {
      console.log("Admin already exists");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default createAdminAccount;
