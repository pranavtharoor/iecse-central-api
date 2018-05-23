const {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType
} = require("graphql");

const Event = require("./eventType");
const EventSession = require("./eventSessionType");

const Attendance = new GraphQLObjectType({
    name: "Attendance",
    description: "Attendance object type",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(attendance) {
                    return attendance.id;
                }
            },
            member_id: {
                type: GraphQLInt,
                resolve(attendance) {
                    return attendance.name;
                }
            },
            event: {
                type: Event,
                resolve(attendance) {
                    return attendance.getEvent();
                }
            },
            eventsession: {
                type: EventSession,
                resolve(attendance) {
                    return attendance.getEventsessions();
                }
            },
        }
    }
});

module.exports = Attendance;