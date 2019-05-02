const express = require('express');
const database = require('./services/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

app.get('/char', async (req, res) => {
  const result = await database.get();
  res.send(result);
})

app.post('/user', async (req, res) => {
  if (!req.body.username || !req.body.level || !req.body.owned || !req.body.notOwned) {
    return res.sendStatus(400).send('Invalid request body')
  }

  const user = {
    username: req.body.username,
    level: req.body.level
  }

  const result = await database.addUser(user, req.body.owned, req.body.notOwned);
  res.send(result);
})

app.get('/user/:id', async (req, res) => {
  const user = await database.getUser(req.params.id);

  res.send(user)
})

app.listen(port, () => console.log(`listening to port ${port}`))