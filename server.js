require('./lib/utils/connect.js').connect();
require('dotenv').config();

//our server makes queries to db, mongo db sends data back 

const app = require('./lib/app');

app.listen('7890', () => {
  console.log('started!!!!!!!!!!!!!!!');
});
