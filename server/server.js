const express = require('express');

const app = express();

let numbers = [];

app.get('/ingreso', (req, res) => {
  const { number } = req.query;
  if (!isNaN(Number(number))) {
    numbers.push(Number(number));
    res.send('OK'); 
    return;
  }

  res.status(400).send('Bad Request');
});

app.get('/egreso', (req, res) => {
  res.json({ numbers });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
