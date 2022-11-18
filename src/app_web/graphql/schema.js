const { buildSchema } = require('graphql');

const schema = buildSchema(`
  input StudentCreateInput {
    student_name: String!
    student_last_name: String!
    student_email: String!
    student_date_of_birth: String
  }

  input BookCreateInput {
    book_name: String!
    book_number_of_pages: Int!
    book_published_at: String!
    book_description: String
  }

  input CheckoutCreateInput {
    book_id: Int!
    student_id: Int!
  }

  type Student {
    id: ID!
    student_name: String!
    student_last_name: String!
    student_email: String!
    student_date_of_birth: String
    books: [Book]
  }

  type Book {
    id: ID!
    book_name: String!
    book_number_of_pages: Int!
    book_published_at: String!
    book_description: String
    students: [Student]
  }

  type Checkout {
    id: ID!
    book_id: Int!
    student_id: Int!
    book: Book
    student: Student
  }

  type EmptySuccess {
    message: String!
  }

  type Mutation {
    CreateStudent(input: StudentCreateInput): Student
    DeleteStudent(id: ID!): EmptySuccess
    CreateBook(input: BookCreateInput): Book
    DeleteBook(id: ID!): EmptySuccess
    CreateCheckout(input: CheckoutCreateInput): Checkout
  }

  type Query {
    FindStudent(id: ID!): Student
    FindBook(id: ID!): Book
  }
`);

module.exports = schema;
