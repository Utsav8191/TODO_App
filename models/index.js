const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: {
    type : String,
    required: true
  },
  category : {
    type : String,
    required: true 
  },
  date: {
    type: Date,
    required: true
  }
});

// Setting name of the collection
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;