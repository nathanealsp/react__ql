const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
// MONGOOSE
const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb://npaul:test123@ds237669.mlab.com:37669/movie_db', {
  useNewUrlParser: true,
});
// to confirm if the connection is open
mongoose.connection.once('open', () =>
  console.log('Successfully Connected to Mlab')
);

const app = express();
const port = 9000;

const schema = require('./Schema/Schema');
// Middleware

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(cors());

app.listen(port, () => {
  console.log(
    `Now listening on port ${port} \nView UI at  http://localhost:9000/graphql`
  );
});
