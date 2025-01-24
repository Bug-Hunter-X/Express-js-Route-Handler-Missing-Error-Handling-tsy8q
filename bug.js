const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct handling for a missing user
  }
  res.json(userData); // Missing error handling if database query fails
});