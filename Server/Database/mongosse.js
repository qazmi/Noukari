var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://alikazmi:saak.51214@ds147011.mlab.com:47011/noukari' )
//'mongodb://alikazmi:saak.51214@ds147011.mlab.com:47011/noukari'
//'mongodb://localhost:27017/Noukari'


module.exports = {mongoose}