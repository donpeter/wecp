const errorMessage = (body, message, statusCode) => {
    return {
        success: false,
        message: message || 'Unsucessful',
        body: body || {},
        statusCode: statusCode || 400
    }
}
const successMessage = ( body, message, statusCode) => {

    return {
        success: true,
        message: message || 'Successful',
        body: body || {},
        statusCode: statusCode || 200
    }
}
const serverErrorMessage = ( err, message, statusCode) => {
    if(process.env.NODE_ENV == 'development')
        err = err.stack;
    return {
        success: false,
        message: message || 'Server Error',
        body: err || {},
        statusCode: statusCode || err.statusCode || 500
    }
}
const resMessage = (success, body,  message, statusCode) => {
    if(success){
        return successMessage(message, body, statusCode);
    }else {
        return errorMessage(message, body, statusCode);

    }
}
module.exports = {
    resMessage,
    successMessage,
    errorMessage,
    serverErrorMessage
}