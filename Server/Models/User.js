var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserInfo = new Schema({
    Name:{
        type : String,
        minlength : 1,
        trim: true,
        default : 'User1'
    },
    password:{
        type : String,
        required : true,
        minlength : 1

    },
    email:{
        type:String,
        minlength : 9,
        required : true

    },
    gender:{
        type:String,
        default :'Male'
    }

},{collection:'Users'});


var User = mongoose.model('User',UserInfo);

module.exports = {User};