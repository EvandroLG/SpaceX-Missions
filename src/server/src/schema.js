const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const { api } = require("./config");

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const result = await axios.get(`${api}launches/`);
        return result.data;
      },
    },

    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const result = await axios.get(`${api}launches/${args.flight_number}`);
        return result.data;
      },
    },

    rockets: {
      type: new GraphQLList(RocketType),
      async resolve(parent, args) {
        const result = await axios.get(`${api}rockets/`);
        return result.data;
      },
    },

    rocket: {
      type: RocketType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const result = await axios.get(`${api}rockets/${args.flight_number}`);
        return result.data;
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
