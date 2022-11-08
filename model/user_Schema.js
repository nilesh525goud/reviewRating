const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
    default: false,
  },
  email: {
    type: String,
    require: true,
  },
  password: { type: String, require: true },

  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  isactive: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    dafault: "user",
  },
});

userSchema.set("timestamps", true);

module.exports = mongoose.model("user", userSchema);
