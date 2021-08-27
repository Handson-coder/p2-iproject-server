const router = require('express').Router()
const ControllerDestination = require('../Controllers/ControllerDestination')
const { authorization, authorizationWishlist } = require('../middlewares/authorization')
const authentication = require('../middlewares/authentication')
const imageKit = require('../middlewares/imageKit')
const multerMiddleware = require('../middlewares/multer')

router.get('/', ControllerDestination.findAll)
router.get('/:id', ControllerDestination.findByPk)

router.use(authentication)

router.post('/', multerMiddleware, imageKit, ControllerDestination.create)
router.put('/:id', authorization, multerMiddleware, imageKit, ControllerDestination.edit)
router.delete('/:id', authorization, ControllerDestination.delete)
router.post('/:id', authorizationWishlist, ControllerDestination.addUserWishlist)

module.exports = router