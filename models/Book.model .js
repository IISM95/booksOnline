/*
{
"name": "",
"author": "" ,
"genre":  "",
 "rented": ""
 }
 */
const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  name: String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "Author" },
  genre: {type: mongoose.SchemaTypes.ObjectId,ref: "Genre"},
  rented: {type: mongoose.SchemaTypes.ObjectId,ref: "User"}
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
