const graphql = require('graphql');

const { movies_: movies, directors } = require('./Data');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// Define an object type we need GraphQLObjectType Class from graphql

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
    certificate: {
      type: GraphQLString,
    },
    runtime: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        console.log(parent);
        return directors.find(item => item.id === parent.directorId);
      },
    },
  }),
});

// const MovieType2 = new GraphQLObjectType({
//   name: 'Movie',
//   fields: () => ({
//     id: {
//       type: GraphQLID,
//     },
//     title: {
//       type: GraphQLString,
//     },
//     year: {
//       type: GraphQLString,
//     },
//     certificate: {
//       type: GraphQLString,
//     },
//     runtime: {
//       type: GraphQLString,
//     },
//     genre: {
//       type: GraphQLString,
//     },
//     blob: {
//       type: GraphQLString,
//     },
//     director: {
//       type: GraphQLString,
//     },
//     stars: {
//       type: GraphQLString,
//     },
//   }),
// });

// The Director TYPE
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
        return movies.filter(movies => movies.directorId === parent.id);
      },
    },
  }),
});

// ROOT QUERY - Defines how we jump into the the graph and get data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    // THE MOVIE QUERY
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } }, // Expect the id to come along with the query
      resolve(parent, args) {
        return movies.find(item => item.id === args.id);
      },
    },

    // THE MOVIES LIST QUERY
    movies: {
      type: new GraphQLList(MovieType),
      resolve: () => movies,
    },

    // THE DIRECTOR QUERY
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } }, // Expect the id to come along with the query
      resolve(parent, args) {
        return directors.find(item => item.id === args.id);
      },
    },

    // THE DIRECTORS LIST QUERY
    directors: {
      type: new GraphQLList(DirectorType),
      resolve: () => directors,
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
