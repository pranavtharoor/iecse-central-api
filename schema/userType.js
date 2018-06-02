const {
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull
	
} = require("graphql");


const User = new GraphQLObjectType({
	name: "User",
	description: "User object type",
	fields : () => {
		return {
			memId : {
				type : GraphQLInt,
				resolve(user) {
					return user.memId;
				}
			},
			name : {
                type : GraphQLString,
                resolve(user) {
                    return user.name;
                }
            },
            email : {
                type : GraphQLString,
                resolve(user) {
                    return user.email;
                }
            },
            type : {
                type : GraphQLInt,
                resolve(user) {
                    return user.type;
                }
            },
            status : {
                type : GraphQLInt,
                resolve(user) {
                    return user.status;
                }
            },
		}
	}
});

module.exports = User;