class ApiError extends Error{
    constructor(
        statusCode,
        data, 
        message,
        error=[],
        stack=""
        
    ){
        super(message);
        this.statusCode= statusCode;
        this.data= data;
        this.error=error;
        if(stack){
            this.stack= stack;
        }

        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError; 