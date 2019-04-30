const express = require('express');
const database = require('./services/database');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());

app.get('/char', async (req, res) => {
  const result = await database.get();
  res.send(result);
})

app.listen(port, () => console.log(`listening to port ${port}`))