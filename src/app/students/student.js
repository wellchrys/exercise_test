const db = require('../models');
const Student = require('../models/student')(db.sequelize, db.Sequelize.DataTypes);

const create = async (attrs) => {
  try {
    const result = await db.sequelize.transaction(async (t) => {
      const student = await Student.create(attrs, { transaction: t });

      return student;
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const destroy = async (id) => {
  const book = await Student.destroy({
    where: { id }
  });

  if (book === null) {
    throw new Error("Not found!");
  } else {
    return { message: "Student deleted!" };
  }
};

const find = async (id) => {
  const student = await Student.findOne({
    where: { id },
    // include: [{
    //   model: Checkout,
    //   required: true,
    //   include: [{
    //     model: Book,
    //     required: true,
    //   }]
    // }]
  });

  if (student === null) {
    throw new Error("Not found!");
  } else {
    return student;
  }
};

module.exports = {
  create,
  destroy,
  find
}
