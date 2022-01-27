export class ErrorHandler extends Error {
  constructor(statusCode, msg) {
    super()
    this.statusCode = statusCode
    this.msg = msg
  }
}

export const handleValidationError = (err, res) => {   
  let errors = Object.values(err.errors).map(el => el.message);   
  let fields = Object.values(err.errors).map(el => el.path);  
  if(errors.length > 1) {   
    const formattedErrors = errors.join(' ');  
    console.log(errors)   
    res.status(400).json({msg: formattedErrors, fields: fields});    
  } else {       
    res.status(400).json({msg: errors, fields: fields})    
  }}