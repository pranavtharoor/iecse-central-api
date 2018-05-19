const {
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull
	
} = require("graphql");

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
				type: GraphQLString,
				resolve(eventSession) {
					console.log(eventSession)
					return eventSession.getEvent();
				}
			}
		}
	}
});

module.exports = EventSession;