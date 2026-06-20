class ApiRepose{
    constructor(
        statusCode,
        data,
        message,
        status
    ){

        this.statusCode= statusCode;
        this.data= data;
        this.message= message;
        this.status= statusCode<400;

    }
}

export default ApiRepose;