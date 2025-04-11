class ApiResponse {
  constructor(statusCode,data,message='success'){
    this.statusCode = statusCode;
    this.success = statusCode<400;
    this.data = null;
    this.message = message;
   
  }
}