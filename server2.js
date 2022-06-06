const axios = require('axios');
const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
app.use(cors());

var data = '';

console.log("======>",data)
axios.get('http://cricpro.cricnet.co.in/api/values/LiveLine')
    .then(res =>console.log("res ---- ",res))   
    .catch(err => console.log("Error: " + err))
const io = require('socket.io')(server,
    {cors : 
        { origin: "http://localhost:3000",
        method: ["GET","POST"],
     }});
app.get('/', (req, res) => {
    res.send("<h1>welcome to server.....</h1>");
    res.end();
})
io.on('connection', (socket) => {
    console.log("Socket is connected", socket.id);


    socket.emit('data',{data: data})
    socket.on('disconnect',() => 
    console.log("Socket disconnected"));
})

server.listen(4000,()=>{
    console.log("server is running...");
})