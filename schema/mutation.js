const {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,

} = require("graphql");
const GraphQLDate = require('graphql-date');
const models = require("../models");

const Event = require("./eventType.js");
const EventSession = require("./eventSessionType.js");
const User = require('./userType');
const Tutorial = require('./tutorialType');


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation',
    fields: () => {
        return {
            addEvent: {
                type: Event,
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    description: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    startDate: {
                        type: GraphQLDate,
                    },
                    audienceType: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    created_by: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    status: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    domain: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve(root, args) {
                    return models.event.create({
                        name: args.name,
                        description: args.description,
                        startDate: args.startDate,
                        audienceType: args.audienceType,
                        created_by: args.created_by,
                        status: args.status,
                        domain: args.domain
                    });
                }
            },
            addSession: {
                type: EventSession,
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    description: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    date: {
                        type: new GraphQLNonNull(GraphQLDate)
                    },
                    venue: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                },
                resolve(root, args) {
                    return models.eventsession.create({
                        name: args.name,
                        description: args.description,
                        date: args.date,
                        venue: args.venue
                    });
                }
            },
            addTutorial: {
                type:  Tutorial,
                args: {
                    title: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    body: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    status: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    created_by: {
                        type: new GraphQLObjectType(User)
                    }
                },
                resolve(root, args) {
                    return models.tutorial.create({
                        title: args.title,
                        body: args.body,
                        status: args.status,
                        created_by: args.created_by.id
                    });
                }
            }
        }
    }
});

module.exports = mutation;