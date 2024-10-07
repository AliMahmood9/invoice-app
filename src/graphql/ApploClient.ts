// src/ApolloClient.tsx
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { graphqlUrl } from "../utils/constants";

const client = new ApolloClient({
  uri: graphqlUrl,
  cache: new InMemoryCache(),
});

export default client;
