const express = require("express");
const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/productRoutes")
const cartRouter = require("./routes/cartRoutes")
const app = express();

app.use("/users",userRouter);
app.use("/api/products",productRouter);
app.use("/cart",cartRouter);

app.listen(3030,()=>{
    console.log("Server is running...");
})