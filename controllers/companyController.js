const { nodemon } = require("nodemon");
const company = require("../model/company_Schema");
const company_Schema = require("../model/company_Schema");
const review_Schema = require("../model/review_Schema");

const createCompany = async (req, resp) => {
  console.log(req.body);
  //let companyExist = company.findone({companyName :company_Name})
  //let company = new company_Schema(req.body);
  //if(companyExist){
  //return resp.status(400).json({
  //status : "400",
  //message : "company already registered"
  //})
  // }

  try {
    const filePath = `/uploads/${req.file.filename}`;
    company.company_logo = filePath;
    const addCompany = await company.save();
    console.log("company", company);
    resp.send({ status: "200", message: "company successful registered" });
  } catch (err) {
    resp.send({
      status: "400",
      message: "company registration failed",
    });
  }
};

//COMPANY LISTING API
const companyListing = async (req, res) => {
  try {
    const allcompany = await company.find();
    const totalCompany = await allcompany.count();
    //console.log(allCompany);
    res.send({
      status: "success",
      message: `"total company found" + ${(allCompany, totalCompany)}`,
    });
  } catch (error) {
    res.send({ status: "failed", message: "no company found" + error });
  }
};
//REVIEW API
const addReview = async (req, res) => {
  try {
    const reviews = new review_Schema(req.body);
    const addreviewdata = await reviews.save();
    console.log(addreviewdata);
    res.send({ status: "200", message: "review add successfully " });
  } catch (err) {
    res.send({ status: "400", meaagge: "review not added" });
  }
};

const companyDetail = async (req,resp)=>{
  let id =req.params.key
   try{
    const companydata= await company.findById(company_id).lean()
    const review = await company.findById(userID).lean()

   }catch(error){

   }

}


//exports file here
module.exports = {
  createCompany,
  companyListing,
  addReview,
};
