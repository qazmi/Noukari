const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const validator = require('validator')

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
        required : true,
        unique:true,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value);
            },
            message:'{VALUE} is not valid email'
        }


    },
    gender:{
        type:String,
        default :'Male'
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]

},{collection:'Users'});

UserInfo.methods.toJSON = function()
{
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['email','_id'])
}

UserInfo.methods.generateAuthToken = function()
{
    var user = this;
    var access = 'auth';
    var token = jwt.sign({id:user._id.toHexString(),access},'ebd.11e').toString();
    console.log(token);
    user.tokens.push({access, token});
    return user.save().then(()=>{
        return token;
    })

}


var User = mongoose.model('User',UserInfo);

module.exports = {User};