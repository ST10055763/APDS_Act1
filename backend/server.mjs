// Simple implementation 1
// console.log('APDS makes me cry')

// Implementation 2
//import http from "http";

// set the port
//const PORT = 3000;

// start the server
//const server = http.createServer((req,res)=>{
    //res.end('I am crying less because my server is working')
//})

//server.listen(PORT)

// Implementation 3 = Using express (MERN)
//import express from "express";
//const PORT = 3000;
//const app = express();

//app.use(express.json());

//app.get('/', (req, res) => {
    //res.send('I am finally figuring this out, no more crying')
//})

//app.get('/test', (req, res) => {
    //res.send('Testing the /test endpoint :)')
//})

// start the Express server
//app.listen(PORT);

// Implementation 4 = more complex API
/* import express from "express";
const PORT = 3000;
const app = express();
const urlprefix = '/api';

app.use(express.json());

app.get(urlprefix+'/', (req, res) => {
    res.send('I am finally figuring this out, no more crying')
})

app.get(urlprefix+'/orders', (req, res) => {
    const orders = [
        {
            id: "1",
            name: "Orange"
        },
        {
            id: "2",
            name: "Apple"
        },
        {
            id: "3",
            name: "Pear"
        },
    ]
    res.json(
        {
            message: "Fruits",
            orders: orders
        }
    )
})

app.listen(PORT); */

// implementation 5: secure our server with OpenSSL (SSL Keys)
import https from "https";
import http from "http";
import fs from "fs";
// import fruits from "./routes/fruit.mjs";
import posts from "./routes/post.mjs";
import users from "./routes/user.mjs";
import express from "express";
import cors from "cors";
// import app from "./app.mjs";

const PORT = 3000;
const app = express();

const options = {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
}

app.use(cors());
app.use(express.json());

app.use((reg,res,next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

// app.use("/fruit", fruits);
// app.route("/fruit", fruits);
app.use("/post", posts);
app.route("/post", posts);
app.use("/user", users);
app.route("/user", users);

let server = https.createServer(options,app)
console.log(PORT);
server.listen(PORT);