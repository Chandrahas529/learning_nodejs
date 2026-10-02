const http = require("http");
const fs = require("fs");

let app = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(req.url === "/"){
        res.setHeader("Content-Type","text/html");

        res.end(`
            <form action='/sendmessage' method='POST'>
            <label>Name</label>
            <input type='text' name='message'/>
            <button type='submit'>Send</button>
            </form>
        `)
    }
    else{
        if(req.url === "/sendmessage"){
            res.setHeader("Content-Type","text/html");
            let dataChunks = [];
            req.on("data",(chunk)=>{
                dataChunks.push(chunk);
            })
            req.on("end",()=>{
                let buffers = Buffer.concat(dataChunks);
                let value = buffers.toString().split("=")[1];
                fs.writeFile("messages.txt",value,(err)=>{
                    res.statusCode = 302;
                    res.setHeader("Location","/readmessage");
                    res.end();
                })
            })
        }
        else{
            if(req.url === "/readmessage"){
                fs.readFile("messages.txt",(err,data)=>{
                    res.setHeader("Content-Type","text/html");
                    res.end(`
                        <h1>${data.toString()}</h1>
                        <form action='/sendmessage' method='POST'>
                        <label>Name</label>
                        <input type='text' name='message'/>
                        <button type='submit'>Send</button>
                        </form>
                    `)
                })
            }
        }
    }
})

app.listen(3001,()=>{
    console.log("Server is running...");
})