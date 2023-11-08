// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const generateToken = require('../config/jwt');

// User Registration (Create User)
const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// User Login
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = generateToken({ username: user.username }); // Implement generateToken function
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get User Profile
const getProfile = (req, res) => {
  // Retrieve user data from the JWT payload
  const user = req.user;
  res.status(200).json(user);
};

// Update User Profile
const updateProfile = async (req, res) => {
  const user = req.user;
  const { newUsername, newPassword } = req.body;
  try {
    user.username = newUsername;
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  updateProfile,
};
