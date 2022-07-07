const Joi = require('joi');

const saleValidate = {
  async body(data) {
    const schema = Joi.object({
      productId: Joi.number().required().positive().integer(),
      quantity: Joi.number().required().min(1),
    }).required();    

    /* const schema = Joi.array().min(1).items(
      Joi.object({
      productId: Joi.number().required().positive().integer(),
      quantity: Joi.number().required().min(1),
    }).required(),
    ).required(); */
    
    const result = await schema.validateAsync(data);
    return result;
    },
  };
module.exports = saleValidate;