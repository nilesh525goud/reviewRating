const joi = require("@hapi/joi");
//joi.objectId = ('joi-objectid')('joi');


const companyValSchema = {
  createCompany: joi
    .object({
      userID : joi.object().required(),
      companyName : joi.string().max(20).required(),
      city : joi.string().required(),
      email : joi.string().email().max(25).required(),
      location : joi.string().required(),
      founded_on : joi.required(),
    })
    .unknown(true),
};

const reviewValSchema = {
  addreview : joi.object({
    companyId : joi.object().required(),
    userId : joi.object().required(),
    subject : joi.string().max(30).required(),
    review : joi.string().max(100).required(),
    rating : joi.number().integer().min(1).max(5).required(),
  })
    .unknown(true)
};

module.exports = { companyValSchema, reviewValSchema };
