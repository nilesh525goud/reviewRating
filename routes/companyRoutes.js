 const express= require("express");
const router =express.Router();
const company = require('../controllers/companyController');
const { validate } = require("../model/company_Schema");
const companyValidation = require('../validation/company validation/companyValidation')



//router.use('/create',companyValidation)
router.post('/create', company.createCompany);
router.post('review',company.addReview)


module.exports= router