const mongoose = require('mongoose');


const dbURI = 'mongodb+srv://deep_kaur:ManCc8745217@cluster0.7ihfp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName: 'airfareDB'});


mongoose.connection.on('connected', () => { 
    console.log(`Mongoose connected to ${dbURI}`); 
   }); 
   mongoose.connection.on('error', err => { 
    console.log('Mongoose connection error:', err); 
   }); 
   mongoose.connection.on('disconnected', () => { 
    console.log('Mongoose disconnected'); 
   });

   require('./customer');
   require('./flighttransaction');
   require('./booking');
   require('./admin');