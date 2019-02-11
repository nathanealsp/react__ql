const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const port = 9000;

const schema = require('./Schema/Schema');
// Middleware

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log(
    `Now listening on port ${port} \nView UI at  http://localhost:9000/graphql`,
  );
});
