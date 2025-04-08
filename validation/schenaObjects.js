import Joi from "joi";

// Reusable mobile validation schema
export const idSchema = Joi.number().integer().required().messages({
  "number.base": "ID must be a valid number!",
  "any.required": "ID is required!"
})

export const mobileSchema = Joi.number().integer().min(1000000000).max(9999999999).required().messages({
  "number.base": "Mobile number must be a valid number!",
  "number.min": "Mobile number must be 10 digits!",
  "number.max": "Mobile number must be 10 digits!",
  "any.required": "Mobile number is required!"
});

export const otpSchema = Joi.number().integer().min(100000).max(999999).required().messages({
  "number.base": "OTP must be a valid number!",
  "number.min": "OTP must be 6 digits!",
  "number.max": "OTP must be 6 digits!",
  "any.required": "OTP is required!"
})

export const nameSchema = Joi.string().min(2).max(50).optional().messages({
  "string.base": "Name must be a valid string!",
  "string.min": "Name must have at least 2 characters!",
  "string.max": "Name must not exceed 50 characters!"
})

export const emailSchema = Joi.string().email().optional().messages({
  "string.base": "Email must be a valid string!",
  "string.email": "Invalid email format!"
})

export const dobSchema = Joi.date()
  .iso()
  .min("1947-01-01")
  .max(new Date())
  .optional()
  .messages({
    "date.base": "Date of Birth must be a valid date!",
    "date.format": "Date format should be YYYY-MM-DD!",
    "date.min": "Date of Birth cannot be earlier than 1947-01-01!",
    "date.max": "Date of Birth cannot be in the future!"
  });


export const genderSchema = Joi.string().valid("male", "female", "other").optional().messages({
  "string.base": "Gender must be a valid string!",
  "any.only": "Gender must be either 'male', 'female', or 'other'!"
})

export const categoryNameSchema = Joi.string().min(2).max(50).required().messages({
  "string.base": "Name must be a valid string!",
  "string.min": "Name must have at least 2 characters!",
  "string.max": "Name must not exceed 50 characters!",
  "any.required": "Name is required!"

})
export const categoryIconSchema = Joi.string().min(2).max(50).required().messages({
  "string.base": "Icon must be a valid string!",
  "string.min": "Icon must have at least 3 characters!",
  "string.max": "Icon must not exceed 15 characters!",
  "any.required": "Icon is required!"

})
export const categoryColorSchema = Joi.string().min(2).max(50).required().messages({
  "string.base": "Color must be a valid string!",
  "string.min": "Color must have at least 3 characters!",
  "string.max": "Color must not exceed 15 characters!",
  "any.required": "Color is required!"

})


