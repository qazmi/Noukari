

const express = require('express');
var bodyParser = require("body-parser");
const path = require("path");
const _ = require('lodash');
var multer  = require('multer');
const FileHound = require('filehound');
const fs = require('fs');
var nodemailer = require('nodemailer');
var parseString = require('xml2js').parseString;


const {mongoose} = require('./Database/mongosse')
var {User} = require('./Models/User')
var {Job} = require('./Models/Job')
var {authenticate} = require('./Middleware/authenticate')

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../dist/Noukari'));


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/Uploaded')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.pdf')
  }
})

var upload = multer({ storage: storage })

app.post('/login-email',async (req, res) => {

  const body = _.pick(req.body, ['email', 'password']);
  try{
    const user = await  User.findByCredentials(body.email,body.password);
    const token = await user.generateAuthToken();
    res.header('x-auth', token).send(user);

  }catch(e)
  {
    res.status(400).send()

  }
  
});

app.post('/register', async (req, res) => {

  var body = _.pick(req.body, ['firstName', 'email', 'password', 'gender']);
  var user = new User(body);
  try{
      var newUser = await user.save();
      var token = await newUser.generateAuthToken();
      if(token)
      {
        res.header('x-auth', token).send(user);
      }
      else
      {
        throw new Error();
      }
  }
  catch(e)
  {
    res.status(400).send();
  }
  
})

app.post('/CV', async (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  try {
    var user = await User.findByCredentials(body.email, body.password);
    if (user) {
      fs.readdir(__dirname + '/Uploaded', function (err, files) {
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }
        res.json({ 'files': files }).send();
      })

    }
    else {

      throw new Error();
    }
  }
  catch (e) {
    res.status(400).send();
  }

})

app.get('/users/me', authenticate, (req, res) => {

  res.send(req.user);

})

//This function is incomplete- would look into it later
app.get('/Jobs',(req,res)=>{
  fs.readFile( __dirname+ '/JOBS.xml', function(err, data) {
   parseString(data, function (err, result) {
     console.dir(result);
 });
 //console.log(data);
 res.status(200).send();
})
});

app.post('/dashboard', async (req, res) => {

  try{
    const docsbyJobTitle = await Job.find({
      title: {
        $regex: '.*' + req.body.searchStr + '.*',
        $options: 'i'
      }
    });
    if(docsbyJobTitle.length == 0)
    {
      const docbyemployer = await Job.find({
        employer: {
          $regex: '.*' + req.body.searchStr + '.*',
          $options: 'i'
        }
      });
      if(docbyemployer.length == 0)
      {
        throw new Error();
      }
    
      res.send(docbyemployer);
    
    }
    else
    {
      res.send(docsbyJobTitle);
    }

  }
  catch(e)
  {
    res.status(400).send();
  }
  
})
app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.body);
    res.json({'message': 'File uploaded successfully'});
 
});

app.get('/apply',(req,res)=>{

  var resfile = _.pick(req.body,['file']);
  console.log(resfile);
  const files = FileHound.create()
  .paths(__dirname+'/Uploaded')
  .ext('pdf')
  .find();
 
  files.then((files)=>{
    console.log(files);

   res.send(files);

  },(e)=>{
    console.log(e);
    res.json({'error':'No File Found'})
  });  
  
})

app.post('/sendemail', async (request, response, next) => {

  var body = _.pick(request.body, ['email', 'password'])
  var To =  _.pick(request.body,'to');
  var resfile = _.pick(request.body,['file']);
  console.log(resfile);
  try
  {
    const user = await User.findByCredentials(body.email, body.password);
    if(user)
    {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: user.email,
          pass: body.password,
          host: 'smtp.gmail.com',
          ssl: false
        }
      });
      var mailOptions = {
        from: body.email,
        to: body.email, //get from form input field of html file
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
         throw new Error();
  
        } else {
  
          response.send({
            'message': 'You have applied succesfully'
          });
        }
      });
    }
    else
    {
      throw new Error();
    }
    
  }
  catch(e)
  {
    response.status(401).send();
  }
 
});




app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
})
