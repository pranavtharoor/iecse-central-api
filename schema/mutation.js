const {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
} = require("graphql");

const {
    GraphQLDate,
    GraphQLTime
} = require("graphql-iso-date");


const models = require("../models");

const Attendance = require("./attendanceType");
const Event = require("./eventType.js");
const EventSession = require("./eventSessionType.js");
const Tutorial = require('./tutorialType');
const User = require('./userType');
const Certificate = require('./certificateType');

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
                    details: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    domain: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    status: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    audienceType: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    startDate: {
                        type: new GraphQLNonNull(GraphQLDate),
                    },
                    endDate: {
                        type: new GraphQLNonNull(GraphQLDate)
                    },
                    addedBy: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(root, args) {
                    return models.event.create({
                        name: args.name,
                        description: args.description,
                        details: args.details,
                        start_date: args.startDate,
                        end_date: args.endDate,
                        audience_type: args.audienceType,
                        status: args.status,
                        domain: args.domain,
                        user_memId: args.addedBy
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
                    time: {
                        type: new GraphQLNonNull(GraphQLTime)
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
                        time: args.time,
                        event_id: args.eventId
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
                    // },
                    // created_by: {
                    //     type: new GraphQLObjectType(User)
                    }
                },
                resolve(root, args) {
                    return models.tutorial.create({
                        title: args.title,
                        body: args.body,
                        status: args.status,
                        // created_by: args.created_by.id
                    });
                }
            },
            generateCertificate: {
                type: Certificate,
                args: {
                    domain: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    event_id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    user_memId: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(root, args) {
                    return models.certificate.create({
                        domain: args.domain,
                        event_id: args.event_id,
                        user_memId: args.user_memId
                    });
                }
            }
        }
    }
});

module.exports = mutation;