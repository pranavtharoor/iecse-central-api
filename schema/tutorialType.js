const {
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull
	
} = require("graphql");

const User = require('./userType');

const Tutorial = new GraphQLObjectType({
	name: "Tutorial",
	description: "Tutorial object type",
	fields : () => {
		return {
			id : {
				type : GraphQLInt,
				resolve(tutorial) {
					return tutorial.id;
				}
            },
            title : {
                type : GraphQLString,
                resolve(tutorial) {
                    return tutorial.title;
                }
            },
            body : {
                type : GraphQLString,
                resolve(tutorial) {
                    return tutorial.body;
                }
            },
            status : {
                type : GraphQLInt,
                resolve(tutorial) {
                    return tutorial.status;
                }
            },
            // created_by : {
            //     type : User,
            //     resolve(tutorial) {
            //         return tutorial.getCreator();
            //     }
            // }
		}
	}
});

module.exports = Tutorial;