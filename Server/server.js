const express = require('express');
var bodyParser = require("body-parser");
const path = require("path");
const _ = require('lodash');

const fileUpload = require('express-fileupload');

const { mongoose } = require('./Database/mongosse')
var { User } = require('./Models/User')
var { Job } = require('./Models/Job')
var {authenticate} = require('./Middleware/authenticate')

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(__dirname + '/../dist/Noukari'));


app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/../dist/Noukari/index.html'));
})

app.post('/login-email', async (req, res) => {

  
  var body = _.pick(req.body,['email','password'])
  var user = new User(body);
 // user.password = '$2a$10$LxZoaADtBAVGCLZq0Wl5jeTRXAa1vbc7X7OpJJ00EP41tAcolLlI6';
  console.log(user);
  
  var credentials =  await User.findOne(body);
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

  var body = _.pick(req.body,['firstName','email','password','gender'])
  var user = new User(body);
  user.save().then(()=>{
    return user.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send(user);
  }).catch((e)=>res.status(400).send(e));
  
})



app.get('/users/me',authenticate,(req,res)=>{

 
  res.send(req.user);
  

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
/*
app.post('/upload', function(req, res) {
  console.log(`Request Received ${req.body}`)
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  console.log(req.body);
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});
*/
app.listen(port, () => {
  console.log(`Server Listening on Port ${port}` );
})




