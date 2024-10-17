const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// POST route for logging in
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid email or password'); // User not found
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid email or password'); // Password does not match
    }

    // Set session or token as needed
    req.session.user = { id: user._id, name: user.username }; // Save user info to session
    res.redirect('/'); // Redirect to homepage
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error'); // Handle server errors
  }
});

module.exports = router;