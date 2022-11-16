const {
  CreateResolverBook,
  CreateResolverStudent,
  DestroyResolverBook,
  DestroyResolverStudent,
  FindResolverBook,
  FindResolverStudent,
  CreateResolverCheckout
} = require('./resolvers');

const CreateBook = (attrs) => CreateResolverBook.call(attrs);

const DeleteBook = (attrs) => DestroyResolverBook.call(attrs);

const FindBook = (attrs) => FindResolverBook.call(attrs);

const CreateStudent = (attrs) => CreateResolverStudent.call(attrs);

const DeleteStudent = (attrs) => DestroyResolverStudent.call(attrs);

const FindStudent = (attrs) => FindResolverStudent.call(attrs);

const CreateCheckout = (attrs) => CreateResolverCheckout.call(attrs);

module.exports = {
  CreateBook,
  CreateStudent,
  DeleteBook,
  DeleteStudent,
  FindBook,
  FindStudent,
  CreateCheckout
}
