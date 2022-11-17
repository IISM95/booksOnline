const {Router} = require('express');
const { gernesController } = require('../controllers/genres.controller');
const router  = Router()

router.post('/genre', gernesController.addGernes)
router.get('/genre',gernesController.getGernes)

module.exports = router;
