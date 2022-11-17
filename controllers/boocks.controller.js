const Book = require("../models/Book.model ");

module.exports.booksController = {
  addBooks: async function (req, res) {
    const data = await Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
		rented: req.body.rented,
    })
	 return res.json(data)
  },
  getBooks: function (req, res) {
    Book.find()
      .populate("author genre rented")
      .then((books) => {
        res.json(books);
      });
  },
  getBooksByGenre: function (req, res) {
    Book.find({ genre: req.params.genreId }).then((books) => {
      res.json(books);
    });
  },

  removeBook: function (req, res) {
    Book.findByIdAndRemove(req.params.boockId).then(() => {
      res.json("deleted");
    });
  },
  updateBook: function (req, res) {
    Book.findByIdAndUpdate(
      req.params.boockId,
      {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        rented: req.body.rented,
      },
      { new: true }
    ).then((boock) => {
      res.json(boock);
    });
  },
  getBoockById: function (req, res) {
    Book.findById(req.params.boockId).then((boock) => {
      res.json(boock);
    });
  },
  rentBoock: async function (req, res) {
    const data = await Book.findByIdAndUpdate(req.params.boockId);
	 if(data.rented){
		return res.json('книга уже арендована')
	}
		await Book.findByIdAndUpdate(req.params.boockId, {
			$set: {rented: req.body.user }
		})
		return res.json(data)
  },
  getBoockByRent: async function (req, res) {
	const data = await Book.find(req.params.boockId).populate('rented')
	return res.json(data)
 },
//  rentBoock: async function (req, res) {
// 	const data = await Book.findByIdAndUpdate(req.params.boockId, {
// 	  $set: {rented: req.body.user}
// 	},{new: true});
// 	return res.json(data)
//  }, было до исправления контроллера 

};
