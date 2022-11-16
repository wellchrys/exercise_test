const Student = require('../../../../app/students/student');

const call = ({ id: id }) => Student.destroy(id);

module.exports = { call };
