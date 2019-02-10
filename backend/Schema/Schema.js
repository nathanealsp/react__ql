const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;

// Define an object type we need GraphQLObjectType Class from graphql

// Create a MovieType off the class syntax

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    actor: {
      type: GraphQLString,
    },
    release_date: {
      type: GraphQLInt,
    },
    watched: {
      type: GraphQLBoolean,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});
