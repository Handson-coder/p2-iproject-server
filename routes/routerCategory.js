const router = require('express').Router()
const ControllerCategory = require('../Controllers/ControllerCategory')

router.get('/', ControllerCategory)

module.exports = router