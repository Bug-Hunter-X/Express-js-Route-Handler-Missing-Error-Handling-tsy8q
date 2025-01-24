const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ...database query to fetch user data...
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Failed to fetch user data');
  }
});