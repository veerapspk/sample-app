const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

// Define a route
app.get('/', (req, res) => {
  res.send('jai shree ram');
});
app.get('/ok', (req, res) => {
    res.send('jai hanuman!');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});