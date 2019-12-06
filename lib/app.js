//CRUD routes here 

//app.get at / --> Model.find()
const Tree = require('./lib/models/Tree');
require('dotenv').config();

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
