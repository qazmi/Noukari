var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var JobInfo = new Schema({
    title:{
        type : String,
        minlength : 1,
        trim: true
    },
    employer:{
        type : String

    },
    description:{
        type:String
    },
    postedSince:{
        type:String
    },
    expiresOn:{
        type:String
    },
    minimumSalary:{
        type:Number
    }

},{collection:'Jobs'});


var Job = mongoose.model('Job',JobInfo);

module.exports = {Job};