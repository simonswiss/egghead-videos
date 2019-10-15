const { Keystone } = require("@keystone-alpha/keystone");
const { GraphQLApp } = require("@keystone-alpha/app-graphql");
const { AdminUIApp } = require("@keystone-alpha/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystone-alpha/adapter-mongoose");
const { Text } = require("@keystone-alpha/fields");

const keystone = new Keystone({
  name: "Setting initial data",
  adapter: new Adapter(),
  onConnect: async () => {
    // Works for this demo, but do not use this technique in production!
    const cats = await keystone.lists.Cat.adapter.findAll();

    // Only create initidal data if there are no cats
    if (!cats.length) {
      console.log(`
Creating intial data! 😻😻😻
`);
      await keystone.createItems({
        Cat: [{ name: "Pixel" }, { name: "Felix" }, { name: "Chubby" }]
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
