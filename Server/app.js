var express  = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
var app = express();

var monk = require('monk');
var db = monk('localhost:27017/forms');

app.use(function(req,res,next){
    req.db = db;
    next();
})

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get("/getforms", function(req, res){
  console.log("getting forms");
  var db=req.db;
  var collection= db.get('forms');
  collection.find().then((docs)=>{
    if(docs.length>0){
      res.send(docs);
    }else{
      res.send('No Docs')
    }
  })
})

// app.route('/forms')
//   .post(function(req, res) {
//     res.send('done')
//   });

app.post("/addform", function(req, res){
  var db=req.db;
  var collection= db.get('forms');
  const {name, author}=req.body;
  collection.insert({"title":name, "author":author, "form":{}});
  res.send("done")
})

var server=app.listen(8081, function(){
  console.log("App is running...");
})




