const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

// GRAPHQL OBJECT TYPES
const MovieType = require('./movieType');
const DirectorType = require('./directorType');

// MODELS(COLLECTIONS) FROM MONGODB
const Movies = require('../database/models/movieModel');
const Directors = require('../database/models/directorModel');

// ROOT QUERY - Defines how we jump into the the graph and get data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    // THE MOVIE QUERY
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } }, // Expect the id to come along with the query
      resolve(parent, args) {
        return Movies.findById(args.id);
      },
    },

    // THE MOVIES LIST QUERY
    movies: {
      type: new GraphQLList(MovieType),
      resolve: () => Movies.find({}),
    },

    // THE DIRECTOR QUERY
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } }, // Expect the id to come along with the query
      resolve(parent, args) {
        return Directors.findById(args.id);
      },
    },

    // THE DIRECTORS LIST QUERY
    directors: {
      type: new GraphQLList(DirectorType),
      resolve: () => Directors.find({}),
    },
  }),
});

module.exports = RootQuery;
