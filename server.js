const express = require("express");
const studentsRouter = require("./routes/students");
const coursesRouter = require("./routes/courses");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to the Student & Course Portal API!");
})

app.use("/students",studentsRouter);

app.use("/courses",coursesRouter);

app.use((req,res)=>{
    res.send("404 Page Not Found")
})

app.listen(3030,()=>{
    console.log("Server is running...")
})