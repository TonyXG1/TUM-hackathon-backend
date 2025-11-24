const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Example route with parameters
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User with ID ${id}` });
});

// Example POST route
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  res.status(201).json({ message: 'User created', user: { name, email } });
});

module.exports = router;
