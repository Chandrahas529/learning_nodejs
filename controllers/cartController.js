const { sendErrorResponse, sendResponse } = require("../utils/response");

const getCartForUser = (req,res) =>{
    try{
         let userId = req.params.userId;
         if(!userId){
            let err = new Error("Invalid userId");
            err.statusCode = 404;
            throw err;
         }
        return sendResponse(res,`Fetching cart for user with ID: ${userId}`,200)
    }
    catch(err){
        return sendErrorResponse(res,err)
    }
}

const addProductToCart = (req,res) => {
    try{
         let userId = req.params.userId;
         if(!userId){
            let err = new Error("Failed to add new product");
            err.statusCode = 500;
            throw err;
         }
        return sendResponse(res,`Adding product to cart for user with ID: ${userId}`,201)
    }
    catch(err){
        return sendErrorResponse(res,err)
    }
}

module.exports = {
    getCartForUser,
    addProductToCart
}