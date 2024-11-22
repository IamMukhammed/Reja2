console.log("Web serverni boshlash");
const express = require("express");
const app = express(); /// expresnijng app objectini yuboradi express serverini yuboradi
// const fs = require("fs");
// const { start } = require("repl");
// app.use(express.static('public'));

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//  if (err) { 
//     console.log("EROR:",err);
// }
//  else {
//     user = JSON.parse(data);
//  }
// });

// MongoDB connect
const db = require("./server").db();

//1 kirish kodlar
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true })); 

//3 views qismi
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing qismi   
app.post("/create-item", (req,res) => {
   console.log(req. body);
   const new_eja = req.body.reja;
   db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
      if(err) {
         console.log(err);
         req.end("Something went wrong");
      } else {
         res.end("Successfully added");
      }
   });
});

// app.get("/author", (req,res) => {
//       res.render("author", {user: user });
// });
app.get('/', function (req, res) {
   console.log('user entered /');
   db.collection("plans").find().toArray((err, data) => {
      if(err) {
         console.log(err);
         res.end("something went wrong");
      } else {
      console.log(data);
      res.render("reja", {items: data});
      }
   });
}); 

module.exports = app;