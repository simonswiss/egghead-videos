const { Keystone } = require("@keystone-alpha/keystone");
const { GraphQLApp } = require("@keystone-alpha/app-graphql");
const { AdminUIApp } = require("@keystone-alpha/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystone-alpha/adapter-mongoose");

const { Text, Select, Relationship } = require("@keystone-alpha/fields");

const keystone = new Keystone({
  name: "Keystone Content Relationships",
  adapter: new Adapter()
});

// Pet owners...
keystone.createList("Owner", {
  fields: {
    name: { type: Text },
    cats: { type: Relationship, ref: "Cat.owner", many: true },
    dogs: { type: Relationship, ref: "Dog.owner", many: true }
  }
});

// Pets
keystone.createList("Cat", {
  fields: {
    name: { type: Text },
    owner: { type: Relationship, ref: "Owner.cats" }
  }
});

keystone.createList("Dog", {
  fields: {
    name: { type: Text },
    owner: { type: Relationship, ref: "Owner.dogs" },
    breed: {
      type: Select,
      options: "corgi, spoodle, maltese, labrador"
    }
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })]
};
