const {
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull
	
} = require("graphql");
const Event = require("./eventType");

const EventSession = new GraphQLObjectType({
	name: "EventSession",
	description: "EventSession object type",
	fields: () => {
		return {
			id: {
				type: GraphQLInt,
				resolve(eventSession) {
					return eventSession.id;
				}
			},
			name: {
				type: GraphQLString,
				resolve(eventSession) {
					return eventSession.name;
				}
			},
			description: {
				type: GraphQLString,
				resolve(eventSession) {
					return eventSession.description;
				}
			},
			event: {
				type: Event,
				resolve(eventSession) {
					return eventSession.getEvent();
				}
			}
		}
	}
});

module.exports = EventSession;