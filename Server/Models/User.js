const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const validator = require('validator')
const bcrypt = require('bcryptjs')

var Schema = mongoose.Schema;

var UserInfo = new Schema({
    firstName:{
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
    user.tokens.push({access, token});
   // console.log('user.tokens',user.tokens);
    //return token;
    return user.save().then(()=>{
        return token;
    })

}

UserInfo.statics.findByToken = function(token)
{
    var User = this;
    var decoded;
    try{
        decoded = jwt.verify(token,'ebd.11e');
        console.log('decoded',decoded);
    }
    catch(e){
        // return new Promise((resolve,reject)=>{
        //     reject();
        // })
        return Promise.reject();

    }
    return User.findOne({
        _id : decoded.id,
        'tokens.token': token,
        'tokens.access':'auth'
    })
}

UserInfo.statics.findByCredentials = function(email,password)
{
    var User = this;
    return User.findOne({email}).then((foundUser)=>{
        if(!foundUser)
        {
            return Promise.reject();
        }
        return new Promise((resolve,reject)=>{
           bcrypt.compare(password,foundUser.password,(err,res)=>{
               if(res)
               {
                   resolve(foundUser);
               }
               else
               {
                   reject();
               }
           })
           
            
        })
    }).catch((e)=> reject());

}

UserInfo.pre('save',function(next){
    var user = this;

    if(user.isModified('password'))
    {
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password = hash;
                next();
            })
        })
    }
    else
    {
        next();
    }

})

var User = mongoose.model('User',UserInfo);

module.exports = {User};