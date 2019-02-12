const graphql = require('graphql');
// TO CREATE THE SCHEMA
const { GraphQLSchema } = graphql;

// ROOTQUERY
const RootQuery = require('./rootQuery');
const Mutation = require('./mutations');
// MUTATION

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
