var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config()


mongoose.connect( 'mongodb://localhost:27017/Noukari'|| process.env.DB_HOST_URI )
//'mongodb://alikazmi:saak.51214@ds147011.mlab.com:47011/noukari'
//


module.exports = {mongoose}