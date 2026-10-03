const fs = require("fs");

function handleRoutes(req,res){
    const url = req.url;
    const method = req.method;
    if(req.url === "/"){
        res.setHeader("Content-Type","text/html");

        res.end(`
            <form action='/message' method='POST'>
            <label>Name</label>
            <input type='text' name='username'/>
            <button type='submit'>Add</button>
            </form>
        `)
    }
    else{
        if(req.url === "/message"){
            res.setHeader("Content-Type","text/html");
            let dataChunks = [];
            req.on("data",(chunk)=>{
                dataChunks.push(chunk);
            })
            req.on("end",()=>{
                let buffers = Buffer.concat(dataChunks);
                let value = buffers.toString().split("=")[1];
                fs.writeFile("formvalues.txt",value,(err)=>{
                    res.statusCode = 302;
                    res.setHeader("Location","/read");
                    res.end();
                })
            })
        }
        else{
            if(req.url === "/read"){
                fs.readFile("formvalues.txt",(err,data)=>{
                    res.end(`
                        <h1>${data.toString()}</h1>
                    `)
                })
            }
        }
    }
}

module.exports = handleRoutes;