const Joi = require('joi');

const productValidate = {
   async body(data) {
    const schema = Joi.object({
      name: Joi.string().required().min(5),
    }).required();
    const result = await schema.validateAsync(data);    
    console.log(result);
    return result;
  },
};

module.exports = productValidate;