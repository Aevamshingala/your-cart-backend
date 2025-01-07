class Apiresponce {
  constructor(statusCode, data, message = "success") {
    (this.statusCode = statusCode),
      (this.data = data),
      (this.message = message),
      (success = true);
  }
}

export { Apiresponce };
