const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  res.status(200).send('Hello World!');
});

exports.app = functions.https.onRequest(app);