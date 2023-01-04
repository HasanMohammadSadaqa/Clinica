const express = require('express');
const cors = require('cors');
const cookies = require("cookie-parser")
const app = express();

app.use(cors({
    credentials: true, origin: 'http://localhost:3000'
}));

app.use(cookies())

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//to get the mongoose which where our data base  
require("./config/mongoose.config");

//this is to get routes and tell it about our app
require("./routes/user.routes")(app);

//let express listen to the port
const server=app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

// const io = require('socket.io')(server, { cors: true });

// io.on("connection",socket=>{

// })