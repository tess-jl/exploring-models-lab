const Tree = require('./models/Tree');
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
  })
    .then(createdTree => res.send(createdTree));
});

//Read
app.get('/:id', (req, res) => {
  //grab the id from the route (url) to use to search for the post you want to search for 
  const id = req.params.id;
  Tree.findById(id)
    .then(tree => res.send(tree));
});

//Put
app.put('/update/:id', (req, res) => {
  Tree.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedObj => res.send(updatedObj)); 
});

//Delete
app.delete('/delete/:id', (req, res) => {
  Tree.findByIdAndDelete(req.params.id)
    .then(deletedObj => res.send(deletedObj)); 
});

module.exports = app;

//   // D - DELETE
//   const deletedTweet = await Tweet.findByIdAndDelete(aSingleFoundTweet._id);
// }
