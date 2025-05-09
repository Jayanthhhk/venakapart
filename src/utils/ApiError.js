class ApiError extends Error{
    constructor(message ='Something went wrong', statusCode,errors = [],statck ='') {
        super(message);
        this.statusCode = statusCode;
        this.errors=errors
        this.data = null
        this.message = message
        this.success= false;

      if (stack){
        this.stack= statck
      }else{
        Error.captureStackTrace(this, this.constructor);
      }
    }
}

export {ApiError}