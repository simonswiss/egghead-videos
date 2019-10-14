const { Keystone } = require("@keystone-alpha/keystone");
const { GraphQLApp } = require("@keystone-alpha/app-graphql");
const { AdminUIApp } = require("@keystone-alpha/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystone-alpha/adapter-mongoose");
const { Text } = require("@keystone-alpha/fields");

const keystone = new Keystone({
  name: "Keystone Lists",
  adapter: new Adapter()
});

// Let's create some Lists!
keystone.createList("cat", {
  fields: {
    name: { type: Text }
  }
});

keystone.createList("dog", {
  fields: {
    name: { type: Text }
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })]
};
