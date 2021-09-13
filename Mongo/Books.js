let Books;
const mongoose = require("mongoose");

const seedData = require("./SeedBooks");
const books = async () => {
  try {
    // * 1 - connect to mongoDB
    await mongoose.connect("mongodb://localhost:27017/books");
    // * 2 - create schema
    const BooksSchema = new mongoose.Schema({
      title: String,
      description: String,
      img_URL: String,
      status: String,
      email: String,
    });
    // * 3 - create model
    Books = mongoose.model("Books", BooksSchema);

    // seedData(Books);
    return Books;
  } catch (e) {
    console.log(e);
  }
};

module.exports = books;
