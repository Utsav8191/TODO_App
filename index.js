const express = require('express');
const port = 8000;

const db = require('./config/mongoose')
const app = express();

// Middleware
app.use(express.urlencoded());

// Require router
const routes = require('./routes/index');
app.use('/', routes);

// Setting view engine
app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static('assets'))

app.listen(port, function(err){
  if(err) {
    console.log(`Couldn't start server due to ${err} error`);
    return;
  }
  console.log(`Server up and running at port ${port}`);  
})