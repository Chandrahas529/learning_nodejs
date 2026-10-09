const productServices = require("../services/productServices")
const {sendErrorResponse,sendResponse} = require("../utils/response")
const path = require("path");
const getAllProducts = (req,res) => {
    try{
        res.sendFile(path.join(__dirname,"..","view","product.html"));
    }
    catch(e){
        let err = new Error("File not found");
        err.statusCode = 404;
        return sendErrorResponse(res,err);
    }
}

const addProduct = (req,res) => {
    try{
        let data = req.body;
        if(!data){
            let err = new Error("Invalid data");
            err.statusCode = 400
            throw err;
        }
        return sendResponse(res,{value:data.productName},201);
    }
    catch(err){
        return sendErrorResponse(res,err);
    }
}

const getProductById = (req,res) => {
    try{
        let id = req.params.id;
        let result = productServices.getProductById(id);
        if(!result){
            let err = new Error("Product not found");
            err.statusCode = 404;
            throw err;
        }
        return sendResponse(res,result,200)
    }
    catch(err){
        return sendErrorResponse(res,err);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}