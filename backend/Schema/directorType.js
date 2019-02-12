const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,

  // GraphQLInt,
  // GraphQLBoolean,
  // GraphQLNonNull,
} = graphql;

// FOR TYPE RELATION
const MovieType = require('./movieType');

// MODELS(COLLECTIONS) FROM MONGODB
const Movies = require('../database/models/movieModel');
const Directors = require('../database/models/directorModel');

// The DIRECTOR TYPE
const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    movie: {
      type: GraphQLString,
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movies.filter(movies => movies.directorId === parent.id);
      },
    },
  }),
});

module.exports = DirectorType;
