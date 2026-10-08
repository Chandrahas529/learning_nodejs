const express = require("express");
const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/productRoutes")
const cartRouter = require("./routes/cartRoutes")
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/cart",cartRouter);

app.listen(3030,()=>{
    console.log("Server is running...");
})