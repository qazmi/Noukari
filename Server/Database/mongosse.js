var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://alikazmi:saak.51214@ds147011.mlab.com:47011/noukari' )


module.exports = {mongoose}