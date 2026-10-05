const express = require("express");

const app = express();

app.use((req,res,next)=>{
    req.user = "Guest";
    next();
})

app.get("/welcome",(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}!`);
})

app.listen(3000,()=>{
    console.log("Server is running")
})

// const http = require("http");
// const routes = require("./routes");
// let app = http.createServer(routes);

// app.listen(3000,()=>{
//     console.log("Server is running...");
// })