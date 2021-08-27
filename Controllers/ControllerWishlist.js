const { Wishlist, Destination, Category } = require('../models')
const main = require('../helpers/nodemailer')

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

  static async checkOutPackage(req, res, next) {
    const user = req.user.email
    const name = req.body.name
    const city = req.body.city
    try {
      const result = await main(user, name, city)
      console.log("berhasil");
      res.status(200).json({ message: "Email Sent!, Please check your email inbox" })
      // console.log(result);
    } catch (err) {
      // console.log(err.message);
      next(err)
    }
  }
}

module.exports = ControllerWishList