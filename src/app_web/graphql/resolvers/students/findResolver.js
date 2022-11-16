const Student = require('../../../../app/students/student');

const call = ({ id: id }) => Student.find(id);

module.exports = { call };
