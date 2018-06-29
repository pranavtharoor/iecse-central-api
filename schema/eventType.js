const {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
} = require("graphql");

const {
    GraphQLDate,
    GraphQLTime
} = require("graphql-iso-date");

const Event = new GraphQLObjectType({
    name: "Event",
    description: "Event object type",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(event) {
                    return event.id;
                }
            },
            name: {
                type: GraphQLString,
                resolve(event) {
                    return event.name;
                }
            },
            description: {
                type: GraphQLString,
                resolve(event) {
                    return event.description;
                }
            },
            details: {
                type: GraphQLString,
                resolve(event) {
                    return event.details
                }
            },
            domain: {
                type: GraphQLString,
                resolve(event) {
                    return event.domain;
                }
            },
            audienceType: {
                type: GraphQLString,
                resolve(event) {
                    return event.audience_type
                }
            },
            status: {
                type: GraphQLString,
                resolve(event) {
                    return event.status
                }
            },
            startDate: {
                type: GraphQLDate,
                resolve(event) {
                    return event.start_date
                }
            },
            endDate: {
                type: GraphQLDate,
                resolve(event) {
                    return event.end_date
                }
            },
            addedBy: {
                type: User,
                resolve(event) {
                    return event.getUser();
                }
            },
            modifiedBy: {
                type: User,
                resolve(event) {
                    return event.getModifiedEvent();
                }
            },
            sessions: {
                type: new GraphQLList(EventSession),
                resolve(event) {
                    return event.getEventsessions();
                }
            },
            certificate: {
                type: new GraphQLList(Certificate),
                resolve(event) {
                    return event.getCertificates();
                }
            }
        }
    }
});

module.exports = Event;
const EventSession = require('./eventSessionType');
const User = require("./userType");
const Attendance = require("./attendanceType");
const Certificate = require("./certificateType");