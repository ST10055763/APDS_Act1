// console.log('APDS makes me cry')

import http from "http";

// set the port
const PORT = 3000;

// start the server
const server = http.createServer((req,res)=>{
    res.end('I am crying less because my server is working')
})

server.listen(PORT)