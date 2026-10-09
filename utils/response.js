const sendErrorResponse = (res,err) => {
    let statusCode = err.statusCode;
    let message = err.message;
    return res.status(statusCode).json({
        message:message,
        success:false
    })
}

const sendResponse = (res,data,statusCode) => {
    return res.status(statusCode).json({
        data:data,
        status:true,
    })
}

module.exports = {
    sendErrorResponse,
    sendResponse
}