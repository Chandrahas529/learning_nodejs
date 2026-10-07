const express = require("express");

const router = express.Router();

const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

router.get("/",(req,res)=>{
    let list = students.map((student)=>student.name)
    res.send("Students: "+list.toString());
})

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    let name = "";
    students.forEach(student => {
        if(student.id == id){
            name = student.name;
        }
    });
    if(name){
        res.send(`Student: ${name}`);
    }
    else{
        res.send("Student not found");
    }
})

module.exports = router;