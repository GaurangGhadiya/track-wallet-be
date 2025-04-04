import Joi from "joi";
import { apiResponse, validate } from "../common/index.js";
import { dobSchema, emailSchema, genderSchema, idSchema, mobileSchema, nameSchema, otpSchema } from "./schenaObjects.js";

// Login validation
export const loginValidation = validate(Joi.object({ mobile: mobileSchema }));

// OTP validation
export const otpValidation = validate(
  Joi.object({
    mobile: mobileSchema,
    otp: otpSchema
  })
);

export const profileValidation = validate(Joi.object({
    id : idSchema,
    name : nameSchema,
    email: emailSchema,
    dob : dobSchema,
    gender : genderSchema,
    mobile : mobileSchema

}))
