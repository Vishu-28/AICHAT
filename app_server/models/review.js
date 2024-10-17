const express = require('express');
const router = express.Router();
const Review = require('../models/addReview'); // Ensure this path is correct

// Example POST route to add a review
router.post('/add', async (req, res) => {
    const { username, email, rating, review } = req.body;

    try {
        const newReview = new Review({ username, email, rating, review });
        await newReview.save();
        res.redirect('/'); // Redirect or send a success message
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving review');
    }
});

module.exports = router;