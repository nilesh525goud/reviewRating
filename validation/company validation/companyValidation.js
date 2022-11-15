const companyValSchema = require("./companyschema");


module.exports = {
  createCompanyValidation: async (req, resp, next) => {
    const value = await companyValSchema.createCompany.validate(req.body, {
      aboutEarly: false,
    });
    if (value.error) {
      resp.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};

module.exports = {
  addReviewValidattion: async (req, resp, next) => {
    const value = await reviewValSchema.addReview.validate(req.body, {
      aboutEarly: false,
    });
    if (value.error) {
      resp.json({
        success : 0,
        message : value.error.details[0].message
      });
    }else{
        next();
    }
  },
};
