import joi from "joi";

export const customerSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().min(10).max(11).required(),
  cpf: joi
    .string()
    .length(11)
    .pattern(/^\d{11}$/),
  birthday: joi.date().required(),
});
