const http = require("http");
const { Module } = require("module");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://eden:Fa1292535@cluster0.9zn7l.mongodb.net/"

mongodb.connect(
    connectionString, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        // console.log(client);
        module.exports = client
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function (){
            console.log(`This server successfully  running on port ${PORT}, http://localhost:${PORT}`); 
        });
    }
});
