const express = require('express');
const router = express.Router();
const Review = require('../models/addReview');

router.post('/submit_review', async (req, res) => {
  const { name, email, rating, review } = req.body;

  try {
    // Create a new review
    const newReview = new Review({ name, email, rating, review });
    await newReview.save();

    res.redirect('/'); // Redirect to homepage after submitting review
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;