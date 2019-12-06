const Tree = require('./models/Tree');
require('dotenv').config();
//express is required for writing routes
const express = require('express');
const app = express();

//means that the app expects to receive json, thereore will parse it 
app.use(express.json());

//CRUD routes 
//Create
app.post('/postRoute', (req, res) => {
  //when I do post request in postman mimic the json req body 
  const { name, leaves, roots, branches, trunk } = req.body;
  //create the post in the right data structure according to Tree model
  Tree.create({
    name, 
    leaves, 
    roots, 
    branches, 
    trunk
  }).then(createdTree => res.send(createdTree));
});

//Read
app.get('/', (req, res) => {
  res.send({ text: 'hello' });
});

//app.put

//app.delete

module.exports = app;

//app.get at / --> Model.find()

// async function allCrudMethods() {
//   // C - POST
//   const createdTweet = await Tweet.create({
//     handle: 'rover',
//     text: 'I like bones',
//     tags: ['breakfast']
//   });

//   // R - GET
//   const aSingleFoundTweet = await Tweet.findById(createdTweet._id);
//   const allFoundTweets = await Tweet.find();

//   // U - PUT
//   const updatedTweet = await Tweet.findByIdAndUpdate(aSingleFoundTweet._id,
//     { text: 'I like tennis balls' },
//     { new: true });

//   // D - DELETE
//   const deletedTweet = await Tweet.findByIdAndDelete(aSingleFoundTweet._id);
// }

//deconstruct req
//do the CRUD
//send back 



