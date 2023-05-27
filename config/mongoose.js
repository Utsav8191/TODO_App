const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/todo-list');

// acquire the connection
const db = mongoose.connection;

// Handle error
db.on('error', console.error.bind(console, 'error connecting to database'));
db.once('open', ()=>{
  console.log("Successfully connected to MongoDB");
})