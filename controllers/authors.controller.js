const Author = require("../models/Author.model");

module.exports.authorController = {
  addAuther: async function (req, res) {
    const data = await Author.create({
      authorName: req.body.authorName,
      description: req.body.description,
    });
    return res.json(data);
  },
  getAuther: async function (req, res) {
    const data = await Author.find().then((author) => {
      return res.json(author);
    });
  },
};
