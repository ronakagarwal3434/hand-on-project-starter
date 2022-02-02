const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || typeof name !== "string") {
    return res.json({ status: "error", message: "Name is required" });
  }

  if (!email || typeof email !== "string") {
    return res.json({ status: "error", message: "Email is required" });
  }

  if (!password || typeof password !== "string") {
    return res.json({ status: "error", message: "Password is required" });
  }

  if (password.length < 6) {
    return res.json({
      status: "error",
      message: "Password too small. Should be atleast 6 characters",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    req.body.password = hashedPassword;

    const user = new User(req.body);
    await user.save();

    res.json({ status: "success", message: "Registered Successfully!" });
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ status: "error", message: "Email already exists" });
    }
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ status: "error", message: "Invalid email/password" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
      );

      return res.json({
        status: "success",
        message: "Successfully Logged In!",
        data: { token, user },
      });
    }

    res.json({ status: "error", message: "Invalid email/password" });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

router.post("/userbytoken", async (req, res) => {
  const { token } = req.body;
  try {
    jwt.verify(token, process.env.JWT_SECRET, async function (error, decoded) {
      if (error) {
        res.json({ status: "error", message: "Please login" });
      } else {
        const user = await User.findById(decoded.id);
        res.json({ status: "success", data: user });
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

module.exports = router;
