"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const getBooks = require("./getBooks");
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/books", getBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
