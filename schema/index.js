const {GraphQLSchema } = require('graphql');

const query = require('./query');
const mutation = require('./mutation');

// Schema
const schema = new GraphQLSchema({
  query
})

module.exports = schema;