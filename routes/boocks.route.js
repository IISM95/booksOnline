const {Router} = require('express');
const { booksController } = require('../controllers/boocks.controller');
const router  = Router()

router.post('/boock',booksController.addBooks)
router.get('/boock',booksController.getBooks)
router.delete("/boock/:boockId",booksController.removeBook)
router.patch("/boock/:boockId",booksController.updateBook)
router.get("/boock/:boockId",booksController.getBoockById)
router.get("/boock/genre/:genreId",booksController.getBooksByGenre)
router.patch("/boock/:boockId/rent",booksController.rentBoock)
router.get("/boock/:boockId/rent",booksController.getBoockByRent)
module.exports = router;
