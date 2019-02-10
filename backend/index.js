const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const port = 9000;

// Middleware

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log(
    `Now listening on port ${port} \nView UI at  http://localhost:9000/graphql`,
  );
});
