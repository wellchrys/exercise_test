'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      student_last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      student_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      student_date_of_birth: {
        type: Sequelize.DATEONLY,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('students');
  }
};
