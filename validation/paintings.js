const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePainting(data) {
    let errors = {};
    data.title = validText(data.title) ? data.title : '';
    data.painting_image = validText(data.painting_image) ? data.painting_image : '';
  
    if (!Validator.isLength(data.title, { min: 3, max: 60 })) {
        errors.title = 'Title must be between 3 and 60 characters';
    }
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title is required';
    }
    if (Validator.isEmpty(data.painting_image)) {
        errors.painting_image = 'Painting is required';
    }
    // Validate canvas size? Restrict on frontend
  
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};