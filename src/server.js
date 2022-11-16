const dotenv = require('dotenv');
dotenv.config()

const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./app_web/graphql/schema');
const root = require('./app_web/graphql/root');

const db = require('./app/models');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const start = async () => {
  try {
    await db.sequelize.sync({force: false});

    app.listen(4000, () => console.log('localhost:4000/graphql'));
  } catch (error) {
    throw new Error(error);
  }
}

start();
