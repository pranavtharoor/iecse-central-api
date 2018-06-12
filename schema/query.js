const {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull

} = require("graphql");
const models = require("../models");

const Event = require("./eventType");
const EventSession = require("./eventSessionType");
const User = require('./userType');
const Tutorial = require('./tutorialType');


const query = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: () => {
        return {
            events: {
                type: new GraphQLList(Event),
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    name: {
                        type: GraphQLString
                    }
                },
                resolve(root, args) {
                    return models.event.findAll({ where: args });
                }
            },
            sessions: {
                type: new GraphQLList(EventSession),
                resolve(root, args) {
                    return models.eventsession.findAll({ where: args });
                }
            },
            users: {
                type: new GraphQLList(User),
                args: {
                    id : {
                        type: GraphQLInt
                    },
                    name : {
                        type: GraphQLString
                    },
                    email : {
                        type: GraphQLString
                    }
                },
                resolve(root,args){
                    return models.user.findAll({ where: args });
                }
            },
            tutorials: {
                type : new GraphQLList(Tutorial),
                args : {
                    id : {
                        type: GraphQLInt
                    },
                    title : {
                        type: GraphQLString
                    },
                    status : {
                        type: GraphQLInt
                    }
                },
                resolve(root,args){
                    return models.tutorial.findAll({ where : args });
                }
            } 
        }
    }
});

module.exports = query;