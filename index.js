const express = require('express');

const app = express();

app.get('/', (_, response) => {
  response.set('Content-Type', 'text/html');
  response.write('<div>Hello world!<div>');
  response.end();
});

app.listen(3000, () => {
  console.log('listening on localhost:3000');
});
