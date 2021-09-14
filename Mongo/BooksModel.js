const mongoose = require("mongoose");
// * 2 - create schema
const BooksSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});
// * 3 - create model
module.exports = mongoose.model("Books", BooksSchema);
