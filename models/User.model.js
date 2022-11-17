/*
{
	"userName":"String",
	"isBlocked": "Boolean",
	"rentedBooks": []
}

*/

const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: String,
  isBlocked: Boolean,
  rentedBooks: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Book"
    },
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
