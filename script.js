const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;
const app = require("./index.js");
app.listen(3000, () => {
  console.log('server started');
});
{
    "name": "Accio assignment solution",
    "version": "1.0.0",
    "description": "Solution Template repo for Acciojob assignments",
    "main": "index.js",
    "scripts": {
        "test": "jest --env=jsdom",
        "start": "node server.js"
    },
    "jest": {
        "verbose": true,
        "testEnvironment": "jsdom"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "cypress": "^9.5.0",
        "express": "^4.17.1",
        "index.js": "0.0.3",
        "jsdom": "^16.5.3",
        "supertest": "^6.1.3"
    }
}