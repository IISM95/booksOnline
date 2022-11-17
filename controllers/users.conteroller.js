const Book = require("../models/Book.model ");
const User = require("../models/User.model");
module.exports.userController = {
  addUser: async function (req, res) {
    const data = await User.create({
      userName: req.body.userName,
      isBlocked: req.body.isBlocked,
      rentedBooks: req.body.rentedBooks,
    });
    return res.json(data);
  },

  getUser: async function (req, res) {
    const data = await User.find();
    return res.json(data);
  },
  rentBoock: async function (req, res) {
    const user = await User.findById(req.params.userId);
    if (user.rentedBooks.length >= 3) {
      return res.json("нельзя арендовать больше 3-х книг одновременно");
    }
	 if(user.isBlocked === true){
		return res.json("вы заблокированы")
	 }
    await User.findByIdAndUpdate(req.params.userId, {
      $addToSet: { rentedBooks: req.body.boockId },
    });
    return res.json(user);
  },
  returnBoock: async function (req, res) {
    const data = await User.findByIdAndUpdate(req.params.userId, {
      $pull: { rentedBooks: req.body.boockId },
    });
    return res.json(data);
  },
  // rentBoock: async function (req, res) {
  //  const data = await User.findByIdAndUpdate(req.params.userId, {
  // 	$addToSet: {rentedBooks: req.body.bookId}
  //  },{new: true});
  //  return res.json(data)
  // },
};
