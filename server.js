require('./lib/utils/connect.js')();
require('dotenv').config();

//our server makes queries to db, mongo db sends data back 

const app = require('./lib/app');

app.listen('7890', () => {
  console.log('started!!!!!!!!!!!!!!!');
});
