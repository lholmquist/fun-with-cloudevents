'use strict';

const express = require('express')
const { HTTP } = require('cloudevents');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/cloudeventy', (req, res) => {
  const ce = HTTP.toEvent({ headers: req.headers, body: req.body});
  console.log(ce.toJSON());
  res.send({key: 'Event Received'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`);
})
