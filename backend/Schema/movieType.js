const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  // GraphQLSchema,
  // GraphQLList,
  // GraphQLInt,
  // GraphQLBoolean,
  // GraphQLNonNull,
} = graphql;

// FOR TYPE RELATION
const DirectorType = require('./directorType');

// MODELS(COLLECTIONS) FROM MONGODB
const Directors = require('../database/models/directorModel');

// THE MOVIE TYPE
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    year: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        console.log(parent);
        return Directors.findby(parent.directorId);
      },
    },
  }),
});

module.exports = MovieType;
