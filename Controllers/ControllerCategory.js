const { Category } = require('../models')

class ControllerCategory {
  static async findAll (req, res, next) {
    try {
      const result = await Category.findAll()
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerCategory