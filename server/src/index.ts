import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import * as path from 'path';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';

async function main() {
  const typeDefs = readFileSync(path.posix.join(__dirname, 'schema.graphql'), {encoding: 'utf-8'});

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
  });

  console.log(`🚀Server ready at: ${url}`);
}

main();

