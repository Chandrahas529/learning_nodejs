const express = require("express");
const productRouter = require("./routes/products");
const categoriesRouter = require("./routes/Categroies");
const bookRouter = require("./routes/books");
const app = express();

app.use("/books",bookRouter);

// app.use("/products",productRouter);

// app.use("/categories",categoriesRouter);

app.listen(4000, ()=>{
    console.log("Server is running...")
})