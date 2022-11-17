const {Router} = require('express');
const router  = Router();

router.use(require('./boocks.route'));
router.use(require('./authors.route'));
router.use(require('./genres.route'));
router.use(require('./reviews.route'));
router.use(require('./users.route'))
module.exports = router;
