const Book = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_number_of_pages: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_published_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    book_description: {
      type: DataTypes.STRING,
    }
  }, { underscored: true, tableName: 'books' });

  book.associate = (models) => {
    book.belongsToMany(models.student, { as: 'students', through: models.checkout, foreignKey: 'book_id'});
  }

  return book;
}

module.exports = Book;
