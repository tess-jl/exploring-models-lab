require('./lib/utils/connect.js')();
const app = require('./lib/app');

app.listen('7890', () => {
  console.log('started!');
});
