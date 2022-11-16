const db = require('../models');
const Checkout = require('../models/checkout')(db.sequelize, db.Sequelize.DataTypes);

const create = async (attrs) => {
  const { book_id: book_id } = attrs;

  try {
    const result = await db.sequelize.transaction(async (t) => {
      const { count, _rows } = await Checkout.findAndCountAll({
        where: {
          book_id,
        }
      });

      if (count <= 2) {
        const checkout = await Checkout.create(attrs, { transaction: t });

        return checkout;
      } else {
        throw new Error("This book already have three stutends related!");
      }
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  create
}
