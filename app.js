const express = require('express');
const {
    createServer
} = require('http');
const {
    SubscriptionServer
} = require('subscriptions-transport-ws');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
    ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const {
    ApolloServer,
} = require('apollo-server-express');
const {
    schema,
} = require('./graphql/root-controller');

const {
    execute,
    subscribe,
    buildSchema
} = require('graphql');

const {
    formatError
} = require("./middleware/formatError");
const rootAuth = require("./middleware/rootAuth");

const errorName = formatError.errorName;

const PORT = process.env.PORT || 4001;

async function startApolloServer(typeDefs, resolvers) {
    // Required logic for integrating with Express
    const app = express();

    app.use(cors({
        origin: true,
        credentials: true
    }));

    app.use(bodyParser.json());

    app.use(cookieParser());

    app.use(rootAuth);

    const httpServer = createServer(app);

    // Same ApolloServer initialization as before, plus the drain plugin.
    const server = new ApolloServer({
        schema,
        introspection: process.env.NODE_ENV !== 'production',
        playground: process.env.NODE_ENV !== 'production',
        plugins: [
            // ApolloServerPluginLandingPageGraphQLPlayground(),
            ApolloServerPluginDrainHttpServer({
                httpServer
            }),
            {
                async serverLandingPage() {
                    if (process.env.NODE_ENV === 'production') {
                        return ApolloServerPluginLandingPageProductionDefault({
                            graphRef: "My-Graph-2-wtim1@current",
                            footer: false,
                        });
                    } else {
                        return ApolloServerPluginLandingPageLocalDefault({
                            footer: false
                        });
                    }
                }
            },
            {
                async serverWillStart() {
                    return {
                        async drainServer() {
                            subscriptionServer.close();
                        },
                    };
                },
            }
        ],
        context: ({
            req,
            res
        }) => ({
            req,
            res,
            errorName,
        }),
        formatError: (err) => {
            return formatError.getError(err);
        },
    });


    const subscriptionServer = SubscriptionServer.create({
        // This is the `schema` we just created.
        schema,
        // These are imported from `graphql`.
        execute,
        subscribe,
        onConnect: () => console.log("Client connected!"),
    }, {
        // This is the `httpServer` we created in a previous step.
        server: httpServer,
        // This `server` is the instance returned from `new ApolloServer`.
        path: server.graphqlPath,
    });

    // More required logic for integrating with Express
    await server.start();
    server.applyMiddleware({
        app,
        cors: true,
        bodyParserConfig: true,
        // By default, apollo-server hosts its GraphQL endpoint at the
        // server root. However, *other* Apollo Server packages host it at
        // /graphql. Optionally provide this to match apollo-server.
        path: '/'
    });

    // Modified server startup
    await new Promise(resolve => httpServer.listen({
        port: PORT
    }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}graphql`);
}

startApolloServer();