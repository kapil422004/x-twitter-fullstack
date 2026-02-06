import { User } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import cookie from "cookie-parser"

export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        success: false,
        message: "Email is already registered.",
      });
    }

    const hashedPw = await bcrypt.hash(password, 10);

    await User.create({
      name,
      username,
      email,
      password: hashedPw,
    });

    return res.json({
      success: true,
      message: "Registered succesfully.",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: message.error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Email is not registered.",
      });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.json({
        success: false,
        message: "Password is incorrect.",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
       sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: `Welcome back ${user.name}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { maxAge: 0 });
  return res.json({ 
    success: true, 
    message: "succesfully logged out" });
};

