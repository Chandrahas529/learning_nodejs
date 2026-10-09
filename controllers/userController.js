const { sendResponse, sendErrorResponse } = require("../utils/response");

const getAllUser = (req,res) => {
    try{
        return sendResponse(res,"Fetching all users",200)
    }
    catch(e){
        let err = new Error("Failed to load data");
        err.statusCode = 500;
        return sendErrorResponse(res,err);
    }
}

const addUser = (req,res) => {
    try{
        return sendResponse(res,"Adding a new user",201)
    }
    catch(e){
        let err = new Error("Failed to add new user");
        err.statusCode = 500;
        return sendErrorResponse(res,err);
    }
}

const getUserById = (req,res) => {
    try{
        let id = req.params.id;
        if(!id){
            let err = new Error("User id not found");
            err.statusCode = 400;
            throw err;
        }
        return sendResponse(res,`Fetching user with ID: ${id}`,200);
    }
    catch(err){
        return sendErrorResponse(res,err)
    }
}

module.exports = {
    getAllUser,
    addUser,
    getUserById
}