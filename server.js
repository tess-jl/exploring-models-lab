require('./lib/utils/connect.js')();
require('dotenv').config();

const app = require('./lib/app');

app.listen('7890', () => {
  console.log('started!!!!!!!!!!!!!!!');
});
