const graphql = require('graphql');

const movies = require('./Data');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
} = graphql;

// Define an object type we need GraphQLObjectType Class from graphql

// Create a MovieType off the class syntax

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: {
      type: GraphQLString,
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
  }),
});

const MovieType2 = new GraphQLObjectType({
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
    blob: {
      type: GraphQLString,
    },
    director: {
      type: GraphQLString,
    },
    stars: {
      type: GraphQLString,
    },
  }),
});

// The ACTOR TYPE
const ActorType = new GraphQLObjectType({
  name: 'Actor',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    movie: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  }),
});

// ROOT QUERY - Defines how we jump into the the graph and get data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } }, // Expect the id to come along with the query
      resolve(parent, args) {
        return movies.find(item => item.id === args.id);
      }, // when we receive a query, we shall have access to the id thru the args, which we could use to query an external database
    },
    allmovies: {
      type: MovieType,
      resolve(parent, args) {
        return movies.map(item => item);
      },
    },

    actor: {
      type: ActorType,
      args: { id: { type: GraphQLString } }, // Expect the id to come along with the query
      resolve(parent, args) {}, // when we receive a query, we shall have access to the id thru the args, which we could use to query an external database
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
