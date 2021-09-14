const Books = require("./Mongo/BooksModel");

const getBooks = async (request, response) => {
  try {
    const { email } = request.query;
    const myBooks = await Books.find({ email });
    response.status(200).json({ myBooks }).end();
  } catch (err) {
    response.status(300).send(err);
  }
};
const deleteBooks = async (request, response) => {
  try {
    const deleted = await Books.deleteOne({ _id: request.params.id });
    response.json(deleted);
  } catch (err) {}
};

const createBooks = async (request, response) => {
  const { email, title, status, description } = request.body;

  try {
    const addBook = await Books.create({
      email,
      title,
      status,
      description,
    });
    getBooks({ query: { email } }, response);
  } catch (err) {
    response.status(400).json(err);
  }
};

module.exports = { getBooks, deleteBooks, createBooks };
