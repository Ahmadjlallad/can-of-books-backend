"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
  response.send("test request received");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
// * NOTS FIXME * Working with Mongoose https://mongoosejs.com/
// * 1- install mongoose npm install mongoose --save
// * 2- require mongoose
const mongoose = require("mongoose");
// * catch errors
main().catch((err) => console.log(err));
// * 3- connect to mongoose
async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
  const kittySchema = new mongoose.Schema({
    name: String, // * 4- create schema for mongoose model
    //   *  the name of the model than the type of the data
  });
  // * 5- compiling our schema into a Model.
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);
  // * seeding a data

  // * - i need to `start the mongodb server`
  // * then open the mongo shell and run the following command `mongo`
  // * to see the data base i have type `show dbs`
  // * connect the shell to the database `use "data base name"`
  // * to see the collections i have type `show collections`
  // * to see the data i have type `db.collectionName.find()`
  // * show data in readable format `db.collectionName.find().pretty()`
  // * every time i save the data it will be duplicated in the database
  // * to prevent that i need to make a function
  // saveData();
}
async function saveData() {
  const silence = new Kitten({ name: "Silence" });
  await silence.save();
}
// * - in the front end i need to make a request to the server
// * to find the data i need to make a request to the server
// * use find method kitten.find({ name: "Silence" }, callBack f || (err, data) => {} )
// * name is the key its the same as the name of the schema
// * and Silence is the value that i want to find
// * callBack f is the function that i will call when i get the data
// * take to agreements err and data
// * if you need all the data kitten.find({  }, (err, data) => {})
