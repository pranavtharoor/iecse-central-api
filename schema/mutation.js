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

const Attendance = require("./attendanceType");
const Event = require("./eventType.js");
const EventSession = require("./eventSessionType.js");
const Tutorial = require('./tutorialType');
const User = require('./userType');


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
                    eventId: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(root, args) {
                    return models.eventsession.create({
                        name: args.name,
                        description: args.description,
                        date: args.date,
                        venue: args.venue,
                        eventId: args.eventId
                    });
                }
            },
            markAttendance: {
                type: Attendance,
                args: {
                    user_id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    event_id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    eventsession_id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(root, args) {
                    return models.attendance.create({
                        user_id: args.user_id,
                        event_id: args.event_id,
                        eventsession_id: args.eventsession_id
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