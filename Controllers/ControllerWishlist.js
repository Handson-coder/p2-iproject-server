const { Wishlist, Destination, Category } = require('../models')

class ControllerWishList {
  static async findWishListsByUserId(req, res, next) {
    try {
      const result = await Wishlist.findAll(
        {
          where: {
            UserId: req.user.id
          },
          include: [
            {
              model: Destination,
              include: {
                model: Category,
              }
            }
          ] //https://sequelize.org/master/manual/advanced-many-to-many.html#through-tables-versus-normal-tables-and-the--quot-super-many-to-many-association-quot-
        }
      )
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerWishList