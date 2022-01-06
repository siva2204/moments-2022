const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('work in progress');
});

app.listen(port, () => {
  console.log(`server up on running on port ${port}`);
});
