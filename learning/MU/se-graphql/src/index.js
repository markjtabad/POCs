const { ApolloServer } = require('apollo-server');
const { PORT = 3030 } = process.env;

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server
  .listen(PORT)
  .then(({url}) => console.log(`Server running at ${url}`));
