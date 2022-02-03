//config apollo

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

// const client = ...
/*
client
  .query({
    query: gql`
   query UsersQuery {
 
 getUsers {
   id 
   email
   books {
     id
     title
   }
 }

}

  `
  })
  .then((result) => console.log(result.data.getUsers));
*/