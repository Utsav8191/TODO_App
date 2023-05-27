const tasks = require('../models/index');

module.exports.home = function(req, res){
  const categoryTheme= {
    personal : "orange",
    work : "#ff1a1a",
    school: "blue",
    home: "gray",
    college: "#2ecc71",
    other: "salmon"
  };

  tasks.find({}).then(result =>{
    return res.render('home',{
      title: "home",
      todo_list: result,
      theme: categoryTheme
    });
  }); 
}

module.exports.createTask = function(req, res) {
  tasks.create({
    description: req.body.description,
    category: req.body.category,
    date: req.body.date
  }).then(result=>{
    console.log(result);
  })
  return res.redirect('back');
}

module.exports.deleteTask = function(req, res) {
  
  const deleteTasks = req.body.check;
  console.log(req.body);

  if(typeof deleteTasks === "string") {
    tasks
    .findByIdAndDelete(deleteTasks)
    .then(doc=> {
      if(!doc){return res.status(404).end();}
    })
    .catch(err=>{
      console.log(err);
      return;
    });
    return res.redirect('back');

  } else {
    for(let i=0; i<deleteTasks.length; i++) {
      tasks
      .findByIdAndDelete(deleteTasks[i])
      .then(doc=> {
        if(!doc){return res.status(404).end();}
      })
      .catch(err=>{
        console.log(err);
        return;
      });  
    }
    return res.redirect('back');
  }
  
}