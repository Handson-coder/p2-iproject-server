const router = require('express').Router()
const routerUser = require('./routerUser')
const routerDestination = require('./routerDestination')
const routerWishlist = require('./routerWishlist')
const routerCategory = require('./routerCategory')
const errorHandler = require('../middlewares/errorHandler')

router.use('/', routerUser)
router.use('/destinations', routerDestination)
router.use('/wishlists', routerWishlist)
router.use('/categories', routerCategory)
router.use(errorHandler)

module.exports = router