export class ErrorHandler extends Error {
  constructor(statusCode, msg) {
    super()
    this.statusCode = statusCode
    this.msg = msg
  }
}

export const handleError = (error, res) => {
  const { statusCode, msg } = error
  res.send({
    statusCode,
    msg,
  })
}
