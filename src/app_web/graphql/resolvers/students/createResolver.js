const Student = require('../../../../app/students/student');

const call = ({ input: attrs }) => Student.create(attrs);

module.exports = { call };
