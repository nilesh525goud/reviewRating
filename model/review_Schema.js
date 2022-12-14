const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const reviewSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "user",
  },

  subject: {
    type: String,
    require: true,
  },
  review: {
    type: String,
    require: true,
  },

  rating: {
    type: Number,
    require: true,
  },

  isactive: {
    type: Boolean,
    default: true,
  },
});

reviewSchema.set("timestamps", true);

module.exports = mongoose.model("review", reviewSchema);
