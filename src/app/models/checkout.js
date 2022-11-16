const Checkout = (sequelize, DataTypes) => {
  const checkout = sequelize.define('checkout', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'book',
        key: 'id',
        as: 'book_id'
      }
    },
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'student',
        key: 'id',
        as: 'student_id'
      }
    },
  }, {
    underscored: true,
    tableName: 'checkouts'
  });

  checkout.associate = (models) => {
    checkout.belongsTo(models.book, { foreignKey: 'book_id', targetKey: 'id', as: 'book' });
    checkout.belongsTo(models.student, { foreignKey: 'student_id', targetKey: 'id', as: 'student' });
  }

  return checkout;
}

module.exports = Checkout;
