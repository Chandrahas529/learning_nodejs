const productServices = require("../services/productServices")
const getAllProducts = (req,res) => {
    let result = productServices.getAllProducts();
    res.send(result);
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