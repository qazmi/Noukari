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
var bodyParser = require('body-parser');
app.use(bodyParser.json());
http.listen(3000, function() {
  console.log(`App started on port 3000`)
})



app.get('/', (req, res) => {

  //MongoClient.connect(url, (err, client) => {
 //   if (err) return console.log('error occured')
 //   var db = client.db('Noukari') // whatever your database name is

  //  db.collection('Jobs').find().toArray(function(err, results) {
  //    console.log(' sent')
      // send HTML file populated with quotes here
  //  })  
//})
res.sendFile(path.join(__dirname + '/../dist/Noukari/index.html'));
})


let response = {
  message:null,
  status :200,
  data:[]

}

var sendError = (err,res)=>{
  response.status = 501;
  response.message = typeof err == "object" ? err.message : err
  //res.status(501).json.(response)

  res.status(501).json(response)
}

app.get('/profile', (req, res) => {

  MongoClient.connect(url, (err, client) => {
    if (err) return console.log('error occured')
    var db = client.db('Noukari') // whatever your database name is

    db.collection('Jobs').find().toArray(function(err, results) {
     if(err)
     console.log(err);
     //response.data = results;
     res.json(results);
    // console.log(response);
    })  
})

})

/*
app.get('/login', (req, res) => {

  MongoClient.connect(url, (err, client) => {
    if (err) return console.log('error occured')
    var db = client.db('Noukari') // whatever your database name is

    db.collection('Users').find().toArray(function(err, results) {
     if(err)
     console.log(err);
     res.json(results);
    })  
})

})
*/
app.post('/register', (req, res) => {
  console.log('req.body')
 db.collection('User').save(req.body, (err, result) => {
   if (err) return console.log(err)

   console.log('saved to database')
   res.redirect('/')
 })
})