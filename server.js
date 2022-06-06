import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import fetch from "node-fetch"
import conn from "./db/db.js"
import User from "./model/suggestions.js"
const app = express()

// import http from 'http';
// import socketIo from 'socket.io';
// const server = http.createServer(app)


app.use(
    cors({
        origin: "http://localhost:3000",    //or :- "*"
        credentials: true
    })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/match-score/', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/LiveLine/')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));


    // io.on('connection', function (socket) {
    //     console.log('a user connected');

    //     socket.emit('greeting-from-server', {
    //         greeting: 'Hello Client'
    //     });
    //     // socket.on('greeting-from-client', function (message) {
    //     //     console.log(message);
    //     // });

    //     socket.on('disconnect', () => {
    //         console.log('user disconnected');
    //     });
    // });
})

app.get('/matches/upcomming-matches', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/upcomingMatches')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
})


app.get('/Info', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/LiveLine/')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
})

app.get('/', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/LiveLine/')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
})

app.post('/contactUs', async (req, res) => {
    try {

        const suggestion = await new User(req.body)
        console.log("body data :- -- ", suggestion);

        await suggestion.save((err) => {
            if (err) {
                console.log("err", err);
            }
        }).then(res => res.status(200).send("res saved" + savedRes));
        
    } catch (error) {
        res.status(400).send(error);
    }

})

app.listen(4000, () => {
    console.log(`server is running on http://localhost:4000`);
})