let Books;
const books = require("./Mongo/Books");
const getBooks = async (request, response) => {
  try {
    Books = Books === undefined ? await books() : Books;
    const { email } = request.query;
    Books.find({ email }, (err, result) => {
      if (err) console.log(err);
      else response.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = getBooks;
