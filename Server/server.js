const express = require('express');
var bodyParser = require("body-parser");
const path = require("path");


const { mongoose } = require('./Database/mongosse')
var { User } = require('./Models/User')
var { Job } = require('./Models/Job')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist/Noukari'));



app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/../dist/Noukari/index.html'));
})

app.post('/login-email', async (req, res) => {
  
  var credentials =  await User.findOne({
      email: req.body.email,
      password: req.body.password
    }
  );
  if(credentials)
  {
    res.send(credentials);
  }
  else
  {
    res.status(400).send(new Error('User doesnot exsist'));
  }

});

app.post('/register', async (req, res) => {

  var user = new User({
    email: req.body.email,
    password: req.body.password,
    Name: req.body.firstName,
    gender: req.body.gender
  });
  var newUser =  await user.save();
  if(newUser)
  {
    res.send(newUser);
  }
  else
  {
    res.status(400).send(e);
  }
  
})

app.post('/dashboard',(req,res)=>{

  console.log(req.body);
  Job.find({title: { $regex: '.*' + req.body.searchStr + '.*',$options: 'i'  } }).then((docsbyJobTitle)=>{
   // console.log(docsbyJobTitle);
    if(docsbyJobTitle.length == 0)
    {
      Job.find({employer: { $regex: '.*' + req.body.searchStr + '.*',$options: 'i'  } }).then((docbyemployer)=>{
        res.send(docbyemployer);
      },(e)=>{console.log(e)});
    }
    else
    {
      res.send(docsbyJobTitle);
    }
    
  },(e)=> console.log(e));
})

app.listen(3000, () => {
  console.log('Server Listening');
})




