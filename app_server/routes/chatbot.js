const express = require('express');
const router = express.Router();

// Chatbot response logic
router.post('/', (req, res) => {
  const userMessage = req.body.message;
  let response = "I'm sorry, I don't understand.";

  // Example responses
  if (userMessage.toLowerCase().includes('jio services')) {
    response = 'Jio offers a variety of services including JioFiber, JioTV, and customer support.';
  } else if (userMessage.toLowerCase() === 'hi') {
    response = 'Hello! How can I assist you today?';
  }

  res.json({ message: response });
});

module.exports = router;
