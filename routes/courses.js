const express = require("express");

const router = express.Router();

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

router.get("/",(req,res)=>{
    let list = courses.map((course)=>course.name)
    res.send("Courses: "+list.toString());
})

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    let course = {};
    courses.forEach((cour)=>{
        if(cour.id == id){
            course = cour;
        }
    })
    if(course.name){
        res.send(`Course: ${course.name}, Description: ${course.description}`);
    }
    else{
        res.send("Course not found");
    }
})

module.exports = router;