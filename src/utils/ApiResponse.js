class ApiResponse {
 constructor(statusCode, data, message = "Success") {
  this.statusCode = statusCode
  this.data = data
  this.message = message
  ths.success = statusCode < 400
 }
}