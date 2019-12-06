const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', () => {
    console.log('We connected to the server :)');
  });

  mongoose.connection.on('error', () => {
    console.error('We cannot connect to the server :(');
  });
}

module.exports = connect;
