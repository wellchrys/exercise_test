const Book = require('../../../../app/books/book');

const call = ({ id: id }) => Book.destroy(id);

module.exports = { call };
