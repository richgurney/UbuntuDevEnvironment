var express = require('express');
var app = express();
var exec = require('child_process').exec;
var mongoose = require('mongoose');
var Post = require('./models/post');
var AdvancedMaths = require('./modules/advanced-maths');
var cors = require('cors');

app.set('view engine' , 'ejs');

app.use(express.static('public'));

app.use(cors());

app.get('/' , function(req , res){
  res.render("index");
});

if(process.env.DB_HOST) {
  mongoose.connect(process.env.DB_HOST);

  app.get("/posts" , function(req,res){
      Post.find({} , function(err, posts){
        if(err) return res.send(err);
        res.render("posts/index" , {posts:posts});
      })
  });
}

app.get("/api/posts" , function(req,res){
    res.json([{
      title: "Post 1",
      body: "A blog post"
    },{
      title: "Post 2",
      body: "Another blog post"
    }]);
  });

app.get('/fibonacci/:n' , function(req,res){

  // high cpu usage function
  var value = AdvancedMaths.fibonacci(req.params.n);

  res.render("fibonacci" , {index:req.params.n, value:value});
});

// app.get("/hack/:command" , function(req,res){

//   var child = exec(req.params.command, function (error, stdout, stderr) {
//     res.render("hackable/index", {stdout:stdout, command:req.params.command});
//   });
// });
var port = process.env.PORT || 3000 ;
app.listen(port , function(){
  console.log(`Your app is ready and listening on port ${port}`);
});


module.exports = app;
