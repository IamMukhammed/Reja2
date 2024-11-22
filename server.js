console.log("Web serverni boshlash");
const express = require("express");
const app = express(); /// expresnijng app objectini yuboradi express serverini yuboradi
const http = require("http");
const fs = require("fs");
const { start } = require("repl");
app.use(express.static('public'));

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
 if (err) { 
    console.log("EROR:",err);
}
 else {
    user = JSON.parse(data);
 }
});

//1 kirish kodlar
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true })); 

//3 views qismi
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing qismi   

app.post("/create-item", (req,res) => {
   
   });

app.get("/author", (req,res) => {
      res.render("author", {user: user });
   });
    app.get('/', function (req, res) {
        res.render("reja")
    }); 
    
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function (){
       console.log(`This server successfully  running on port ${PORT}, http://localhost:${PORT}`); 
    });