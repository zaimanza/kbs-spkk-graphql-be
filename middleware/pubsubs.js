var {
    PubSub,
    withFilter,
} = require('graphql-subscriptions');
const pubsub = new PubSub(); //create a PubSub instance

exports.pubsub = pubsub;
exports.withFilter = withFilter;