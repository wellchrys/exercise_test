## Setup

Before running the setup, make sure you added the env var `NODE_ENV` as 'development'

Run 'yarn' to install all dependencies

```bash
yarn
```

Make sure the following ports will be available:

- Postgres new: 5432
- Web Application: 4000

Run 'docker' command to create the database

```bash
docker compose up -d postgresql
```

Run migration with `yarn migrate:up`

Start endpoint with `yarn dev:server`

Now you can visit [`localhost:4000`](http://localhost:4000/graphql) from your browser.

## Endpoints

Assuming you already got the app up and running, through this endpoint `http://localhost:4000/graphql` you must be able to access the App.

### Mutations

#### Create Book

```bash
mutation CreateBook($input: BookCreateInput) {
   CreateBook(input: $input) {
    id
    book_name
    book_number_of_pages
    book_published_at
    book_description
  }
}
```

#### Create Student

```bash
mutation CreateStudent($input: StudentCreateInput) {
  CreateStudent(input: $input) {
    id
    student_name
    student_last_name
    student_email
    student_date_of_birth
  }
}
```

#### Create Checkout (To make the Many-to-Many relationship)

```bash
mutation CreateCheckout($input: CheckoutCreateInput) {
  CreateCheckout(input: $input) {
    id
    book_id
    student_id
  }
}
```

#### Delete Student

```bash
mutation DeleteStudent($id: ID!) {
  DeleteStudent(id: $id) {
    message
  }
}
```

#### Delete Book

```bash
mutation DeleteBook($id: ID!) {
  DeleteBook(id: $id) {
    message
  }
}
```

### Queries

#### Find Book

```bash
query FindBook($id: ID!) {
   FindBook(id: $id) {
    id
    book_name
    book_number_of_pages
    book_published_at
    book_description
  }
}
```

#### Find Student

```bash
query FindStudent($id: ID!) {
   FindStudent(id: $id) {
    id
    student_name
    student_last_name
    student_email
    student_date_of_birth
  }
}
```
