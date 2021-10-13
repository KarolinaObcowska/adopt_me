export class ErrorHandler extends Error {
    constructor(statusCode, msg) {
      super();
      this.statusCode = statusCode;
      this.msg = msg;
    }
  }

  export const handleError = (err, res) => {
    const { statusCode, msg } = err;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      msg
    });
  };
