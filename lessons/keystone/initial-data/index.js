const { Keystone } = require("@keystone-alpha/keystone");
const { GraphQLApp } = require("@keystone-alpha/app-graphql");
const { AdminUIApp } = require("@keystone-alpha/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystone-alpha/adapter-mongoose");
const { Text } = require("@keystone-alpha/fields");

const keystone = new Keystone({
  name: "Setting initial data",
  adapter: new Adapter(),
  onConnect: async () => {
    // This technique works for this demo - don't use this in production
    const cats = await keystone.lists.Cat.adapter.findAll();
    if (!cats.length) {
      // Create initial data if there are no cats yet!
      console.log(`
  Creating initial data! 😻😻😻 
      `);
      keystone.createItems({
        Cat: [{ name: "Felix" }, { name: "Pixel" }, { name: "Chubby" }]
      });
    }
  }
});

keystone.createList("Cat", {
  fields: {
    name: { type: Text }
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })]
};
