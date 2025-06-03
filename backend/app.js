#!/usr/bin/node

const express = require('express');
path = require('path');
const app = express();
// Disable caching FIRST (for development only)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});
// app.use(require('morgan')('dev'));
// app.use(express.json()); // for REST API
// app.use(express.urlencoded({ extended: false })); // for classic HTML forms

app.get('/', (req, res) => {
  res.send('hello from the backend');
});
app.use((req, res) => {res.status(404).send(`<h1>Page does not exist</h1>`)});

const PORT = 8100;
app.listen(PORT, () => {
  // console.log(`Server listening on http://localhost:${PORT}`);
});
