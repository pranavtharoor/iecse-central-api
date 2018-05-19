const {
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull
	
} = require("graphql");

const Db = require("./db");

const Person = new GraphQLObjectType({
	name: "Person",
	description: "This is the Person object type",
	fields: () => {
		return {
			id: {
				type: GraphQLInt,
				resolve(person) {
					return person.id;
				}
			},
			firstName: {
				type: GraphQLString,
				resolve(person) {
					return person.firstName;
				}
			},
			lastName: {
				type: GraphQLString,
				resolve(person) {
					return person.lastName;
				}
			},
			email: {
				type: GraphQLString,
				resolve(person) {
					return person.email;
				}
			},
			posts: {
				type: new GraphQLList(Post),
				resolve(person) {
					return person.getPosts();
				}
			}
		}
	}
});

const Post = new GraphQLObjectType({
	name: "Post",
	description: "This is the Post object type",
	fields: () => {
		return {
			id: {
				type: GraphQLInt,
				resolve(post) {
					return post.id;
				}
			},
			title: {
				type: GraphQLString,
				resolve(post) {
					return post.title;
				}
			},
			contents: {
				type: GraphQLString,
				resolve(post) {
					return post.contents;
				}
			},
			person: {
				type: Person,
				resolve(post) {
					return post.getPerson();
				}
			}
		}
	}
});



const Query = new GraphQLObjectType({
	name: "Query",
	description: "Root query",
	fields: () => {
		return {
			people: {
				type: new GraphQLList(Person),
				args: {
					id: {
						type:GraphQLInt
					},
					email: {
						type:GraphQLString
					}
				},
				resolve(root, args) {
					return Db.models.person.findAll({where: args});
				}
			},
			posts: {
        		type: new GraphQLList(Post),
        		resolve (root, args) {
        		  	return Db.models.post.findAll({ where: args });
        		}
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields () {
    return {
      addPerson: {
        type: Person,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.models.person.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email.toLowerCase()
          });
        }
      },
      addPost: {
        type: Post,
        args: {
          userId: {
            type: GraphQLNonNull(GraphQLInt)
          },
          title: {
            type: GraphQLNonNull(GraphQLString)
          },
          contents: {
            type: GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.models.user.findById(args.userId).then( user => {
            return user.createPost({
              title: args.title,
              contents: args.contents
            });
          });
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
	query: Query
});

module.exports = Schema;