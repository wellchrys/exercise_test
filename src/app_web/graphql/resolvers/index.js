const CreateResolverBook = require('./books/createResolver');
const FindResolverBook = require('./books/findResolver');
const DestroyResolverBook = require('./books/destroyResolver');
const CreateResolverStudent = require('./students/createResolver');
const FindResolverStudent = require('./students/findResolver');
const DestroyResolverStudent = require('./students/destroyResolver');
const CreateResolverCheckout = require('./checkouts/createResolver');

module.exports = {
  CreateResolverBook,
  FindResolverBook,
  DestroyResolverBook,
  CreateResolverStudent,
  FindResolverStudent,
  DestroyResolverStudent,
  CreateResolverCheckout
}

