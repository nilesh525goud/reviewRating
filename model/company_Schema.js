const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const companySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "users",
  },

  companyName: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },

  location: {
    type: String,
    require: true,
  },

 //company_logo: {
  //type: String,
  //require:true,
//},

  founded_on: {
    type: String,
    require: true,
  },
  isactive: {
    type: Boolean,
    default: true,
  },
});

companySchema.set("timestamps", true);

module.exports = mongoose.model("company", companySchema);
