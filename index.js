const express = require('express');
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const app = express();
// http server creation
const server = http.createServer(app);
// setup of socket-io
const io = socketio(server);
//Express use EJS as the template engine. With EJS, we can create dynamic HTML pages by embedding JavaScript code within HTML files. The main uses of EJS templates to Render dynamic content
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

io.on("connection",(socket)=>{
    // recieve from frontend
    socket.on('send-location',(data)=>{
        // send data to frontend
        io.emit("recieve-location",{
            id: socket.id,
            lat: data.latitude,
            long: data.longitude
        })
    })
    socket.on("disconnect",()=>{
        io.emit("user-disconnect",socket.id);
    })
    console.log("connected");

})

app.get("/",function (req,res) {
    // res.send("Hey");
    res.render("index");
})

server.listen(3000);
console.log("Server is started..");