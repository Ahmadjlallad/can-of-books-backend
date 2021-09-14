const BooksModel = require("./BooksModel");
const seedData = require("./SeedBooks");
const books = async () => {
  try {
    seedData(BooksModel);
  } catch (e) {
    console.log(e);
  }
};

module.exports = books;
