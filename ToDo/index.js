var express = require('express');
var app = express()
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.use(express.static("public"));


var task = ["buy milk", "learn javascript", "learn express"];

app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
var complete = ["finish learning nodejs"];
app.post("/removetask", function(req, res) {
     var completeTask = req.body.check;
if (typeof completeTask === "string") {
     complete.push(completeTask);
  task.splice(task.indexOf(completeTask), 1);
  } else if (typeof completeTask === "object") {
    for (var i = 0; i < completeTask.length; i++) {     complete.push(completeTask[i]);
    task.splice(task.indexOf(completeTask[i]), 1);
  }
}
   res.redirect("/");
});

app.get("/", function(req, res) {
    res.render('index', { task: task, complete: complete});
});

app.listen(8080, function () {
  console.log('Running on port 8080!')
});