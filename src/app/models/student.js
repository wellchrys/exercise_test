const Student = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    student_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_date_of_birth: {
      type: DataTypes.DATEONLY,
    }
  }, { underscored: true, tableName: 'students' });

  student.associate = (models) => {
    student.belongsToMany(models.book, { as: 'BookInStudent', through: models.checkout, foreignKey: 'student_id'});
  }

  return student;
}
module.exports = Student;
