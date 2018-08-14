const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Ania',
    age: 30
  }, {
    name: 'Amanda',
    age: 28
  }, {
    name: 'Farah',
    age: 26
  }]);
});
//GET / users
//give users a name property and age prop.(2, 3 users)


app.listen(3000);
module.exports.app = app;

// [] - array, {} - Object, [{}] - array of objects! :P
