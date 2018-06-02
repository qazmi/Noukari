const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const json = bodyparser.json;
const http = require('http').Server(app);
const urlencoded = bodyparser.urlencoded;
const path = require("path");

app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/../dist/testing'));

/*
app.get('/test', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    return res.json({
      code: '0',
      msg: 'Successfully called test API'
    })
})*/

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/testing/index.html'));
});

http.listen(3000, function() {
  console.log(`App started on port 3000`)
})