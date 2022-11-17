const express = require('express');
const app = express();
const mongoose = require("mongoose")
app.use(express.json());              


app.use(require('./routes'))


mongoose.connect(
	"mongodb+srv://Islam:I2012051@cluster0.qhou4ot.mongodb.net/booksOnline?retryWrites=true&w=majority",
	() => {
	  console.log("conectid");
	  app.listen(3000, function () {
		 console.log("server has been started");
	  });
	}
 );