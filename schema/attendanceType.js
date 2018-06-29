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
            }
        }
    }
});

module.exports = Attendance;