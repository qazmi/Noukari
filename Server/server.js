

const express = require('express');
var bodyParser = require("body-parser");
const path = require("path");
const _ = require('lodash');
var multer  = require('multer');
const FileHound = require('filehound');
const fs = require('fs');
var nodemailer = require('nodemailer');


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

// app.get('/', (req, res) => {

//   res.sendFile(path.join(__dirname + '/../dist/Noukari/index.html'));
// })

app.post('/login-email',(req, res) => {

  var body = _.pick(req.body, ['email', 'password'])
  User.findByCredentials(body.email,body.password).then((user)=>{
     return user.generateAuthToken().then((token)=>{
      res.header('x-auth', token).send(user);       

    })
    

  }).catch((e)=>{
    res.status(400).send();
  });

});

app.post('/register', async (req, res) => {

  var body = _.pick(req.body, ['firstName', 'email', 'password', 'gender'])
  var user = new User(body);
  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => res.status(400).send(e));

})



app.get('/users/me', authenticate, (req, res) => {

  res.send(req.user);

})

app.post('/dashboard', (req, res) => {

  console.log(req.body);
  Job.find({
    title: {
      $regex: '.*' + req.body.searchStr + '.*',
      $options: 'i'
    }
  }).then((docsbyJobTitle) => {

    if (docsbyJobTitle.length == 0) {
      Job.find({
        employer: {
          $regex: '.*' + req.body.searchStr + '.*',
          $options: 'i'
        }
      }).then((docbyemployer) => {
        res.send(docbyemployer);
      }, (e) => {
        console.log(e)
      });
    } else {
      res.send(docsbyJobTitle);
    }

  }, (e) => console.log(e));
})
app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.body);
    res.json({'message': 'File uploaded successfully'});
 
});

app.get('/apply',(req,res)=>{

  const files = FileHound.create()
  .paths(__dirname+'/Uploaded')
  .ext('pdf')
  .find();
 
  files.then((files)=>{
    console.log(files);
   // res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "X-Requested-With");
   // res.header('content-type', 'application/pdf');
   //var Path = files[0];
   res.send(files);

   // var file = fs.createReadStream(files[0]);
   // var stat = fs.statSync(files[0]);
   // res.setHeader('Content-Length', stat.size);
   // res.setHeader('Content-Type', 'application/pdf');
   // res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
   // file.pipe(res);
   // res.send(file);
   //res.json({'message': 'File found'});
  },(e)=>{
    console.log(e);
    res.json({'error':'No File Found'})
  });  
  
})

app.post('/sendemail', (request, response, next) => {

  var body = _.pick(request.body, ['email', 'password'])
  var To =  _.pick(request.body,'to');
  
  console.log(To);

  User.findByCredentials(body.email, body.password).then((user) => {
   // console.log(user.password);

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
        console.log(error);
        response.status(401).send()

      } else {

        response.send({
          'message': 'You have applied succesfully'
        });

        console.log('success');

       // response.json()
      }
    });
  },(e)=>{
    response.status(401).send(e)

  });

});




app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
})
