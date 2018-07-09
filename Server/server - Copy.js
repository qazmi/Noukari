const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const json = bodyparser.json;
const http = require('http').Server(app);
const urlencoded = bodyparser.urlencoded;
const path = require("path");
const MongoClient = require('mongodb').MongoClient;
app.use(json());
const url = 'mongodb://localhost:27017';
app.use(urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/../dist/Noukari'));

/*
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/Noukari/index.html'));
});*/

http.listen(3000, function() {
  console.log(`App started on port 3000`)
})



app.get('/profile', (req, res) => {

  MongoClient.connect(url, (err, client) => {
    if (err) return console.log('error occured')
    var db = client.db('Noukari') // whatever your database name is

    db.collection('Jobs').find().toArray(function(err, results) {
      console.log(results)
      // send HTML file populated with quotes here
    })  
})
res.sendFile(path.join(__dirname + '/../dist/Noukari/index.html'));
})