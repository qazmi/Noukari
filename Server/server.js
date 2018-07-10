const express = require('express');
var bodyParser = require("body-parser");
const path = require("path");


const { mongoose } = require('./Database/mongosse')
var { User } = require('./Models/User')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist/Noukari'));



app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/../dist/Noukari/index.html'));
})

app.post('/login-email', (req, res) => {
  
  var user = new User({
    email: req.body.email,
    password: req.body.pass
  });
  
  User.find().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
});

app.post('/register', (req, res) => {
  
  var user = new User({
    email: req.body.email,
    password: req.body.password,
    Name: req.body.firstName,
    gender:req.body.gender
  });

  //console.log(req.body);
   user.save().then((doc) => {
     console.log(doc);
     res.send(doc);
   }, (e) => {
     console.log(e);
     res.status(400).send(e);
   })

})

app.listen(3000, () => {
  console.log('Server Listening');
})




