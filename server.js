console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1. Kirish portlari: express ga kirib kelayotgan malumotlarga bogliq bo'lgan code lar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// a: Har qanday brauzerdan kirib kelyatgan zaproslar uchun public folderi ochiq degan manoni bildiradi.
// b: express.json - kieib kelyatgan json formatidagi data ni object holatiga og'irib beradi.
// c: HTML forumdan tradition request qilish instrumenti.

// 2. Sessions code

// 3. Views code: ejs orqali folderni ochish
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing code
// app.get("/", function (req, res) {
    // res.end("Hello everyones");
    // res.end("<h1>Hello everyones</h1>");
    // res.end(`<h1 style=background: orange>Hello everyones</h1>`);
// });
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

 app.get("/", function (req, res) {
    res.render("harid");
 });


// app.get("/hello", function (req, res) {
//     res.end(`<h1 style=background: orange>Hello everyones</h1>`);
// });

// app.get("/gift", function (req, res) {
//     res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});

// Express ni 4 ta bo'limda shakllantirdik va uni serverga yuborish
