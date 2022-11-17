const Genre = require("../models/Genre.model");

module.exports.gernesController ={
	addGernes: function (req, res) {
		Genre.create({ 
			genreName: req.body.genreName, 
			genredescription: req.body.genredescription }).then((author) => {
		  res.json(author);
		});
	 },
	 getGernes: function(req,res) {
		Genre.find().then((genre)=>{res.json(genre)})
	 }
}
