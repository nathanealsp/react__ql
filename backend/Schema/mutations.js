const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

// GRAPHQL OBJECT TYPES
const MovieType = require('./movieType');
const DirectorType = require('./directorType');

// MODELS(COLLECTIONS) FROM MONGODB
const Movies = require('../database/models/movieModel');
const Directors = require('../database/models/directorModel');

/** ******************************** MUTATIONS ********************************* */

// These allow use to mutate / change our data
// Adding Data
// Editing Data
// Deleting Data

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // ADD MOVIE MUTATION
    addMovie: {
      type: MovieType,
      args: {
        title: {
          type: GraphQLString,
        },
        year: {
          type: GraphQLString,
        },
        genre: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        const movie = new Movies({
          title: args.title,
          year: args.year,
          genre: args.genre,
        });
        return movie.save();
      },
    },
  }),
});

module.exports = Mutation;
