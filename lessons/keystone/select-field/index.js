const { Keystone } = require("@keystone-alpha/keystone");
const { GraphQLApp } = require("@keystone-alpha/app-graphql");
const { AdminUIApp } = require("@keystone-alpha/app-admin-ui");
const {
  MongooseAdapter: Adapter
} = require("@keystone-alpha/adapter-mongoose");

const { Text, Select } = require("@keystone-alpha/fields");

const PROJECT_NAME = "Keystone Fields";

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://v5.keystonejs.com/keystone-alpha/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://v5.keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter()
});

keystone.createList("dog", {
  fields: {
    name: { type: Text },
    breed: {
      type: Select,
      // options: "corgi, spoodle, maltese, labrador"
      // options: ["corgi", "spoodle", "maltese", "labrador"]
      options: [
        { label: "Corgi", value: "corgi" },
        { label: "Spoodle", value: "spoodle" },
        { label: "Maltese", value: "maltese" },
        { label: "Labrador", value: "labrador" }
      ]
    }
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })]
};
