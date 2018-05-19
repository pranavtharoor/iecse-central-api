const {
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull
	
} = require("graphql");
const models = require("../models");

const Event = require("./eventType.js");
const EventSession = require("./eventSessionType.js");


const query = new GraphQLObjectType({
	name: "Query",
	description: "Root query",
	fields: () => {
		return {
			events: {
				type: new GraphQLList(Event),
				args: {
					id: {
						type:GraphQLInt
					},
					name: {
						type:GraphQLString
					}
				},
				resolve(root, args) {
					return models.event.findAll({where: args});
				}
			},
			sessions: {
				type: new GraphQLList(EventSession),
				resolve(root, args) {
					return models.eventsession.findAll({where: args});
				}
			}
		}
	}
});

module.exports = query;