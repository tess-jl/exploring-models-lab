const Tree = require('./models/Tree');
require('dotenv').config();
//express is required for writing routes
const express = require('express');
const app = express();

//means that the app expects to receive json, thereore will parse it 
app.use(express.json());


//CRUD routes here 

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



// app.get('/', (req, res) => {
//   res.send({ text: 'hello' });
// });

// app.post('/hello', (req, res) => {
//   res.send(req.body);
// });

module.exports = app;
