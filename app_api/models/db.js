const mongoose = require('mongoose');

const dbURI = 'mongodb://lottamar:Hellboy94@ds046027.mlab.com:46027/hisinfernalmajesty';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');