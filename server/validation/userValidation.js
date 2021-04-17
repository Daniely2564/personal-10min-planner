import Joi from "joi";

export const signInSchema = Joi.object({
  firstName: Joi.string().pattern(/^[a-zA-Z]{2,30}$/),
  lastName: Joi.string().pattern(/^[a-zA-Z]{2,30}$/),
  password: Joi.string().min(8),
  confirmPassword: Joi.ref("password"),
  email: Joi.string().email(),
});
