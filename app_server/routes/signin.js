const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// POST route for signing in
router.post('/signin', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Your account already exists.'); // User already exists
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.redirect('/'); // Redirect to homepage after registration
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error'); // Handle server errors
  }
});

module.exports = router;