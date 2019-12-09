//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mySql = require('mysql');

//Database connection
// const mySqlConnection = mySql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'sak.ryz.mysql',
//   database: 'dbms'
// });
// mySqlConnection.connect(err =>{
//   if(!err){
//     console.log("Database connection successful !");
//   }else{
//     console.log("Database connection failed , Error : \n"+JSON.stringify(err,undefined,2));
//   }
// });
//Item constructor
function Item(name,price,quantity){
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}
//Item list declaration
const items = [];
var total = 0;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine','ejs');

app.get('/',(req, res)=>{
  res.render("landing",{});
});

app.get('/admin',(req, res)=>{
  res.render('admin');
});

app.get("/menuPage",(req, res)=>{
  res.render("menu");
});
app.post("/menuPage",(req, res)=>{
  res.render("menu");
});

app.post("/additem",(req, res)=>{
  const item = req.body.item.split(',');
  const quantity = req.body.numberOfItems;
  
  console.log(quantity);
  
  const newItem = new Item(item[0],parseInt(item[1]),quantity);
  total += (newItem.quantity * newItem.price);
  items.push(newItem);
  res.redirect('/menuPage');
});

app.post("/cart",(req, res)=>{
  res.render("cart",{items:items,total:total});
});

app.post("/login",(req, res)=>{
  res.render("loginPage");
});

app.get("/signUp",(req, res)=>{
  res.render("signup");
});
app.post("/signUp",(req, res)=>{
  console.log("Sign-up working");
});

app.post("/tableBooking",(req, res)=>{
  res.render("table");
});

app.listen(3000,(req, res)=>{
  console.log("Server started on port 3000.");
});
