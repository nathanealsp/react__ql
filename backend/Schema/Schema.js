const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  // GraphQLInt,
  // GraphQLBoolean,
  // GraphQLNonNull,
} = graphql;

// MODELS(COLLECTIONS) FROM MONGODB
const Movies = require('../database/models/movieModel');
const Directors = require('../database/models/directorModel');

// *************************GRAPHQL OBJECT TYPES************************* //

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
    // FOR TYPE RELATION
    director: {
      type: DirectorType,
      resolve(parent, args) {
        console.log(parent);
        return Directors.findby(parent.directorId);
      },
    },
  }),
});

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
    // FOR TYPE RELATION
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movies.filter(movies => movies.directorId === parent.id);
      },
    },
  }),
});

// *************************GRAPHQL OBJECT TYPES************************* //

// ******************************ROOT QUERY****************************** //
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
// ******************************ROOT QUERY****************************** //

// *******************************MUTATIONS******************************* //

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

// *******************************MUTATIONS******************************* //

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
