const http = require("http");
const routes = require("./routes");
let app = http.createServer(routes);

app.listen(3000,()=>{
    console.log("Server is running...");
})