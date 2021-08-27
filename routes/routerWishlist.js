const router = require('express').Router()
const ControllerWishList = require('../controllers/ControllerWishlist')
const ControllerWishlist = require('../controllers/ControllerWishlist')
const authentication = require('../middlewares/authentication')
const { authorizationWishlist } = require('../middlewares/authorization')

router.use(authentication)
router.get('/', authorizationWishlist, ControllerWishlist.findWishListsByUserId)
router.post('/nodemailer', authorizationWishlist, ControllerWishList.checkOutPackage)

module.exports = router