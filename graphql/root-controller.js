const {
    gql,
} = require('apollo-server-express');

const {
    merge,
} = require('lodash');

const {
    pubsub,
    withFilter,
} = require('../middleware/pubsubs');

const {
    makeExecutableSchema
} = require('@graphql-tools/schema');

const {
    kelabSchema,
    kelabController
} = require("./kelab-controller/kelab-controller");

const typeDefs = gql`
input orderItemReq {
    name: String,
    quantity: Int,
    image: String,
    price: Float,
}

type orderItemRes {
    _id: String!,
    name: String,
    quantity: Int,
    image: String,
    price: Float,
}

 type Query {
    _empty: String 
 }
 
 type Mutation {
     _empty: String 
  } 
  
  ${kelabSchema}
 `;

const resolvers = merge(
    {},
    kelabController,
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

exports.schema = schema;