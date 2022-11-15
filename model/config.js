const mongoose = require("mongoose");
const url=process.env.url
console.log("mongo:",url)
mongoose.connect(url, { useNewUrlParser: true,});
const connection = mongoose.connection;
connection.once("open", function (req, resp) {
  console.log("mango db connection established successfully  ");
});

