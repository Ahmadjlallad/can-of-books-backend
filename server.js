"use strict";
// const seed = require("./Mongo/SeedBooks");
// const BooksModel = require("./Mongo/BooksModel");
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { getBooks, deleteBooks, createBooks } = require("./RESTBooks");
app.use(cors());
const PORT = process.env.PORT || 3001;
const db = mongoose.connection;
app.use(express.json());
// * NOTE 1 - connect to mongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

db.on("error", (err) => console.log(err, "connection error:"));
db.once("open", () => console.log("connected to database"));

app.get("/", async (req, res) => {
  // await seed(BooksModel);
});

app.get("/books", getBooks);
app.delete("/books/:id", deleteBooks);
app.post("/books", createBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
