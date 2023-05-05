const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/create', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app