/*
{
	"lyricReview": "",
	"nameAuthorReview":"",
   "book": ""
}
*/


const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
	lyricReview: String,
	nameAuthorReview:String,
   book:{
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Book",}
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
