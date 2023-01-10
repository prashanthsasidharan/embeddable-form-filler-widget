var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
var formFieldsMap = require('./fieldMap');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db', {
   useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.log(err)
  }
});

app.set('view engine', 'jade');
app.engine('jade', require('jade').__express); 
app.get('/demo', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   let {name} = req.body;
   console.log(name);
   res.json({msg: 'semma'})
});

app.get('/filler', function(req,res){
   res.json({data: formFieldsMap});
});

app.post('/filler', function(req,res) {
   let payload = req.body;

   res.json({data: payload})
})

app.put('/filler', function(req,res) {
   let payload = req.body;

   res.json({data: payload});
})

// var personSchema = mongoose.Schema({
//   name: String,
//   age: Number,
//   nationality: String
// });
// var Person = mongoose.model("Person", personSchema);


// app.get('/items', function(req, res){
//   res.json({msg: 'adraaaa'});
// })

// app.post('/person', function(req, res){
//   var personInfo =  {name: 'Ayush', age: 20, nationality: 'indian'}; //Get the parsed information
//   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
//      res.json({ msg: "Sorry, you provided worng info" });
//   } else {
//      var newPerson = new Person({
//         name: personInfo.name,
//         age: personInfo.age,
//         nationality: personInfo.nationality
//      });
   
//      newPerson.save(function(err, Person){
//         if(err)
//            res.json({msg: "Database error"});
//         else
//            res.json({msg: "New person added"});
//      });
//   }
// });

// app.get('/person', function(req, res) {
//   console.log()
//   Person.find({name: "Ayush", age: 20}, 
//    function(err, response){
//       console.log(response);
// });
// })


app.listen(3000);