import Joi from "joi";
import { apiResponse, validate } from "../common/index.js";
import { categoryColorSchema, categoryIconSchema, categoryNameSchema, idSchema } from "./schenaObjects.js";


export const addCategoryValidation = validate(Joi.object({
    name : categoryNameSchema,
    icon: categoryIconSchema,
    color : categoryColorSchema,
    type : Joi.string().valid("income", "expense").required().messages({
        "any.only": "Type must be either 'income' or 'expense'!",
        "any.required": "Type is required!"
    })
}))
export const updateCategoryValidation = validate(Joi.object({
    id : idSchema,
    name : categoryNameSchema,
    icon: categoryIconSchema,
    color : categoryColorSchema,
}))
export const subCategoryValidation = validate(Joi.object({
    categoryId : idSchema,
    name : categoryNameSchema,
    icon: categoryIconSchema,
    color : categoryColorSchema,
}))
export const updateSubCategoryValidation = validate(Joi.object({
    id : idSchema,
    name : categoryNameSchema,
    icon: categoryIconSchema,
    color : categoryColorSchema,
}))
