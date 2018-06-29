const {
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
    GraphQLList
} = require("graphql");

const {
    GraphQLDate,
    GraphQLTime
} = require("graphql-iso-date");

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
			date: {
				type: GraphQLDate,
				resolve(eventsession) {
					return eventsession.date
				}
			},
			venue : {
				type: GraphQLString,
				resolve(eventsession) {
					return eventsession.venue
				}
			},
			time: {
				type: GraphQLTime,
                resolve(eventsession) {
				    return eventsession.time
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

