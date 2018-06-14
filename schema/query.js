const {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType
} = require("graphql");


const models = require("../models");

const Attendance = require("./attendanceType.js");
const Event = require("./eventType.js");
const EventSession = require("./eventSessionType.js");
const Tutorial = require('./tutorialType');
const User = require('./userType');


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
            attendance: {
                type: new GraphQLList(Attendance),
                resolve(root, args) {
                    return models.attendance.findAll({ where: args })
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