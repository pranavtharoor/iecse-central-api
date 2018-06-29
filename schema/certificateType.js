const {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLList
} = require("graphql");

const Event = require("./eventType");
const User = require("./userType");

const Certificate = new GraphQLObjectType({
    name: "Certificate",
    description: "Certificate object type",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(certificate) {
                    return certificate.id;
                }
            },
            event: {
                type: Event,
                resolve(certificate) {
                    return certificate.getEvent();
                }
            },
            domain: {
                type: GraphQLString,
                resolve(certificate) {
                    return certificate.domain;
                }
            },
            user: {
                type: User,
                resolve(certificate) {
                    return certificate.getUser();
                }
            }
        }
    }
});

module.exports = Certificate;

