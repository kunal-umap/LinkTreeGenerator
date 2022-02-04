const express = require('express');

// // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require('cors');

// used to process data sent through an HTTP request body.
const http = require('http');

// using dotenv for port variable and enviroment port in case of hosting
require('dotenv').config();

// setting port variable 
const PORT = process.env.PORT || 8080;

// creating express instance
const app = express();
app.use(express.json());

// created server
const server = http.createServer(app);

// for cross connection 
app.use(cors());

app.get("/",(req,res) => {
    res.send("Hello");
})

server.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`);
});