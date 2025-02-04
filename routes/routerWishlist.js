const router = require('express').Router()
const ControllerWishList = require('../Controllers/ControllerWishlist')
const authentication = require('../middlewares/authentication')
const { authorizationWishlist } = require('../middlewares/authorization')

router.use(authentication)
router.get('/', authorizationWishlist, ControllerWishList.findWishListsByUserId)
router.post('/nodemailer', authorizationWishlist, ControllerWishList.checkOutPackage)

module.exports = router