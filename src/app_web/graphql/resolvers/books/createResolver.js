const Book = require('../../../../app/books/book');

const call = ({ input: attrs }) => Book.create(attrs);

module.exports = { call };
