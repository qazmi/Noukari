const express = require('express');
var bodyParser = require("body-parser");
const path = require("path");
const _ = require('lodash');
var multer  = require('multer')


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

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
})
