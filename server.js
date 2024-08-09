const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy endpoint for sentiment analysis
app.post('/analyze', (req, res) => {
  const { review } = req.body;
  // Dummy sentiment analysis logic
  const sentiment = review.includes('good') ? 'Positive' : 'Negative';
  res.json({ sentiment });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
