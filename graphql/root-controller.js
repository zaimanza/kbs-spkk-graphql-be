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

const {
    kertasKerjaSchema,
    kertasKerjaController
} = require("./kertas-kerja-controller/kertas-kerja-controller");

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
  ${kertasKerjaSchema}
 `;

const resolvers = merge(
    {},
    kelabController,
    kertasKerjaController,
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

exports.schema = schema;