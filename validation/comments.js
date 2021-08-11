const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateComment(data) {
<<<<<<< HEAD
  
=======
  // debugger
>>>>>>> mergePainting
  let errors = {};
  data.description = validText(data.description) ? data.description : '';

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}