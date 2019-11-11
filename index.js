
const express = require('express');
const app = express();

const persons = require('./src/person.controller');

app.use('/person', persons);

const port = 3000;
app.listen(port, function () {
  console.log('Server arriba!. Puerto ', port);
});