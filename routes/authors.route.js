const {Router} = require('express');
const { authorController } = require('../controllers/authors.controller');
const router  = Router()

router.post('/author',authorController.addAuther)
router.get('/author',authorController.getAuther)

module.exports = router;

