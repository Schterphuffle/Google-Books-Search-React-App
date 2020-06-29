const mongoose = require("mongoose");
const { urlencoded } = require("express");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  link: { type: String, require: true },
  image: { type: String, trim: true} 

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;