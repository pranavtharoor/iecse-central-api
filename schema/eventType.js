const {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull

} = require("graphql");


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
            domain: {
                type: GraphQLString,
                resolve(event) {
                    return event.domain;
                }
            },
            sessions: {
                type: new GraphQLList(EventSession),
                resolve(event) {
                    return event.getEventsessions();
                }
            }
        }
    }
});

module.exports = Event;
const EventSession = require('./eventSessionType');