const productServices = require("../services/productServices")
const path = require("path");
const getAllProducts = (req,res) => {
    res.sendFile(path.join(__dirname,"..","view","product.html"));
}

const addProduct = (req,res) => {
    let result = productServices.createProduct(req);
    res.send(result); 
}

const getProductById = (req,res) => {
    let id = req.params.id;
    let result = productServices.getProductById(id);
    res.send(result);
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}