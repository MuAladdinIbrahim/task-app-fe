import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const typeDefs = gql`
  input TodoInput {
    title: String!
    description: String!
    userId: String!
    status: String
  }

  type Mutation {
    CreateTodo(todo: TodoInput!): TODO
  }
  `;

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://localhost:3000/graphql",
    }),
    typeDefs
  });
});