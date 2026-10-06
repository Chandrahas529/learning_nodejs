const express = require("express");
const productRouter = require("./routes/products");
const categoriesRouter = require("./routes/Categroies");
const app = express();

app.use("/products",productRouter);

app.use("/categories",categoriesRouter);

app.listen(4000, ()=>{
    console.log("Server is running...")
})