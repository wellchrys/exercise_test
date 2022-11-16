const db = require('../models');

const Book = require('../models/book')(db.sequelize, db.Sequelize.DataTypes);

const create = async (attrs) => {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      const book = await Book.create(attrs, { transaction: t });

      return book;
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const destroy = async (id) => {
  const book = await Book.destroy({
    where: { id }
  });

  if (book === null) {
    throw new Error("Not found!");
  } else {
    return { message: "Book deleted!" };
  }
};

const find = async (id) => {
  const book = await Book.findOne({
    where: { id },
    // include: [{
    //   model: Checkout,
    //   required: true,
    //   include: [{
    //     model: Student,
    //     required: true,
    //   }]
    //  }]
  });

  if (book === null) {
    throw new Error("Not found!");
  } else {
    return book;
  }
};

module.exports = {
  create,
  destroy,
  find
}
