const express = require("express");

const app = express();

app.listen(3000,()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests")
})

// const http = require("http");
// const routes = require("./routes");
// let app = http.createServer(routes);

// app.listen(3000,()=>{
//     console.log("Server is running...");
// })